import { isValidObjectId } from 'mongoose';
import MotorcycleODM from '../Models/MotorcycleODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcyclesService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(
        { model: motorcycle.model,
          year: motorcycle.year,
          color: motorcycle.color,
          id: motorcycle.id,
          status: motorcycle.status,
          buyValue: motorcycle.buyValue,
          engineCapacity: motorcycle.engineCapacity,
          category: motorcycle.category,
        },
      );
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcyclesODM = new MotorcycleODM();
    if (!motorcycle.status) {
      const newMotorcycle = await motorcyclesODM.create({ ...motorcycle, status: false });
      return this.createMotorcycleDomain(newMotorcycle);
    }
    const newMotorcycle = await motorcyclesODM.create({ ...motorcycle });
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async find() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();
    return motorcycles.map((motor) =>
      this.createMotorcycleDomain(motor));
  }

  public async findById(id: string) {    
    if (!isValidObjectId(id)) {      
      return { status: 422, message: 'Invalid mongo id' };
    }
    const motorcyclesODM = new MotorcycleODM();
    const motorcycle = await motorcyclesODM.findById(id);
    if (!motorcycle) {
      return { status: 404, message: 'Motorcycle not found' };
    }
    const data = this.createMotorcycleDomain(motorcycle);
    return { data, status: 200 };
  }
}
