import express from 'express';
import cars from '../../../db/cars.js';
const router = express.Router();

router.get('/cars', (req, res) => {
  res.json(cars);
});

export default router;
