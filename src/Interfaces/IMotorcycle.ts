import IVehicle from './IVehicle';

export default interface IMotorcycle extends IVehicle {
  engineCapacity: number
  category: string
}