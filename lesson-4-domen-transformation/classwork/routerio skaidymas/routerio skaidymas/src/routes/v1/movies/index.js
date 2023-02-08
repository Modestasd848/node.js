import express from 'express';
import movies from '../../../db/movies.js';
const router = express.Router();

router.get('/movies', (req, res) => {
  res.json(movies);
});

export default router;
