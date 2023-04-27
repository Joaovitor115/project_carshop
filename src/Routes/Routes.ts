import { Router } from 'express';
import CarsController from '../Controllers/CarsController';
import MotorcycleController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).create(),
);
routes.get(
  '/cars',
  (req, res, next) => new CarsController(req, res, next).find(),
);
routes.get(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).findById(),
);
routes.put(
  '/cars/:id',
  (req, res, next) => new CarsController(req, res, next).updateById(),
);
routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).find(),
);
routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

export default routes;