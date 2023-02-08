import express from 'express';
import data from '../../db/index.js';
const router = express.Router();

router.get('/car/:brands', (req, res) => {
  res.json(car.f);
});

export default router;
