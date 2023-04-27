import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean;
  protected buyValue: number;
  protected engineCapacity: number;

  constructor(
    element: IMotorcycle,
  ) {
    this.id = element.id;
    this.model = element.model;
    this.year = element.year;
    this.color = element.color;
    this.status = element.status;
    this.buyValue = element.buyValue;
    this.engineCapacity = element.engineCapacity;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setColor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setModel(model: string) {
    this.model = model;
  }

  public getModel() {
    return this.model;
  }

  public setYear(year: number) {
    this.year = year;
  }

  public getYear() {
    return this.year;
  }

  public setBuyValue(buyValue: number) {
    this.buyValue = buyValue;
  }

  public getBuyValue() {
    return this.buyValue;
  }

  private getEngineCapacity() {
    return this.engineCapacity;
  }

  public setStatus(status: boolean) {
    this.status = status;
  }

  public getStatus() {
    return this.status;
  }
}