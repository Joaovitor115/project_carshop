import {
  Schema,
} from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      status: { type: Boolean, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
    });
    super(schema, 'Motorcycles');
  }
}