import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private engineCapacity: number;
  private category: string;

  constructor(
    element: IMotorcycle,
  ) {
    super({
      id: element.id,
      model: element.model,
      year: element.year,
      color: element.color,
      status: element.status,
      buyValue: element.buyValue,
    });
    this.engineCapacity = element.engineCapacity;
    this.category = element.category;
  }
}