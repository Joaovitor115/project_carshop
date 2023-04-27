import {
  Schema,

} from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

export default class CarsODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      status: { type: Boolean, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
    });
    super(schema, 'Cars');
  }
}
