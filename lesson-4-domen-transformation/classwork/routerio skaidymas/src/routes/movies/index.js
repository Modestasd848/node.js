import express from 'express';
const router = express.Router();

const movies = [
  {
    name: 'Avengers',
    year: '2012',
  },

  {
    name: 'Transformers',
    year: '2009',
  },
];

router.get('/movies', (req, res) => {
  res.json(movies);
});

export default router;
