import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    element: ICar,
  ) {
    super({
      id: element.id,
      model: element.model,
      year: element.year,
      color: element.color,
      status: element.status,
      buyValue: element.buyValue,
    });
    this.doorsQty = element.doorsQty;
    this.seatsQty = element.seatsQty;
  }
}