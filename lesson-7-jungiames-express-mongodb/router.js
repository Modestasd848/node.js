import express from 'express';
import { getAllCars, addNewCar } from './contoller.js';
const router = express.Router();

router.get('/', getAllCars);

router.post('/', addNewCar);

export default router;
