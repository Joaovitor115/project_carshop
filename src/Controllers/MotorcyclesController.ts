import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      engineCapacity: this.req.body.engineCapacity,
      category: this.req.body.category,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    const motorcycle = await this.service.find();
    return this.res.status(200).json(motorcycle);
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