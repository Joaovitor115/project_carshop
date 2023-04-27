import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarsService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(
        { model: car.model,
          year: car.year,
          color: car.color,
          id: car.id,
          status: car.status,
          buyValue: car.buyValue,
          doorsQty: car.doorsQty,
          seatsQty: car.seatsQty },
      );
    }
    return null;
  }

  public async create(car: ICar) {
    const carsODM = new CarsODM();
    if (!car.status) {
      const newCar = await carsODM.create({ ...car, status: false });
      return this.createCarDomain(newCar);
    }
    const newCar = await carsODM.create({ ...car });
    return this.createCarDomain(newCar);
  }

  public async find() {
    const carsODM = new CarsODM();
    const cars = await carsODM.find();
    return cars.map((car) =>
      this.createCarDomain(car));
  }

  public async findById(id: string) {    
    if (!isValidObjectId(id)) {      
      return { status: 422, message: 'Invalid mongo id' };
    }
    const carsODM = new CarsODM();
    const car = await carsODM.findById(id);
    if (!car) {
      return { status: 404, message: 'Car not found' };
    }
    const data = this.createCarDomain(car);
    return { data, status: 200 };
  }

  public async updateById(id: string, carToUpdate: ICar) {    
    if (!isValidObjectId(id)) {      
      return { status: 422, message: 'Invalid mongo id' };
    }
    
    const carsODM = new CarsODM();
    const car = await carsODM.updateById(id, carToUpdate);
    
    if (!car) {
      return { status: 404, message: 'Car not found' };
    }
    const data = this.createCarDomain(car);
    return { data, status: 200 };
  }
}
