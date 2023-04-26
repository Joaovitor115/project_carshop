import { Router } from 'express';
import CarsController from '../Controllers/CarsController';

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

export default routes;