import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T | null> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    const car = await this.model.find();
    return car;
  }

  public async findById(id: string): Promise<T | null> {
    const obj = await this.model.findById(id);
    if (obj) {
      return obj;
    }
    return null;
  }

  public async updateById(id: string, data: Partial<T>): Promise<T | null> {
    const obj = await this.model.findByIdAndUpdate(id, { ...data }, { new: true });
    if (obj) {
      return obj;
    }
    return null;
  }
}
