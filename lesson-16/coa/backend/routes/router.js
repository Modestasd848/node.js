import express from 'express';
import {
  getAllCars,
  createNewCar,
  deleteCar,
  getCarById,
  routeNotFound,
} from '../controllers/controller.js';
import {
  validateQuery,
  middlewareTest,
  checkForId,
} from '../middleware/middleware.js';
const router = express.Router();

// Pasiimma visus produktus
router.get('/cars', getAllCars);
router.post('/cars', middlewareTest, createNewCar);
router.delete('/cars/:id', checkForId, deleteCar);
router.get('/cars/:id', checkForId, getCarById);
router.all('*', routeNotFound);

export default router;
