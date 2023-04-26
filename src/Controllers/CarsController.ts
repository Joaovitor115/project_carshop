import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  public async create() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    const car = await this.service.find();
    return this.res.status(200).json(car);
  }

  public async findById() {
    const { id } = this.req.params;
    const { message, status, data } = await this.service.findById(id);
    if (message) {
      return this.res.status(status).json({ message });
    }
    return this.res.status(status).json(data);
  }
}
