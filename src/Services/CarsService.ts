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
    const newCar = await carsODM.create(car);
    return this.createCarDomain(newCar);
  }
}
