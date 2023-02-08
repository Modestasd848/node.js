import express from 'express';
const router = express.Router();

const cars = [
  {
    make: 'BMW',
    year: '2000',
  },

  {
    make: 'Audi',
    year: '2005',
  },
];

router.get('/cars', (req, res) => {
  res.json(cars);
});

export default router;
