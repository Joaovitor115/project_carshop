import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      engineCapacity: { type: Number, required: true },

    });
    this.model = models.Motorcycles || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    if (!motorcycle.status) {
      return this.model.create({ ...motorcycle, status: false });
    }
    return this.model.create({ ...motorcycle });
  }

  public async find(): Promise<IMotorcycle[]> {
    const motorcycle = await this.model.find();
    return motorcycle;
  }

  public async findById(id: string): Promise<IMotorcycle | null> {
    const motorcycle = await this.model.findById(id);
    if (motorcycle) {
      return motorcycle;
    }
    return null;
  }

  public async updateById(id: string, data: IMotorcycle): Promise<IMotorcycle | null> {
    const motorcycle = await this.model.findByIdAndUpdate(id, { ...data }, { new: true });
    if (motorcycle) {
      return motorcycle;
    }
    return null;
  }
}
