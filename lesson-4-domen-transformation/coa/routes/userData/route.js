import express from 'express';
import data from '../../db/index.js';
const router = express.Router();

router.get('/data', (req, res) => {
  res.json(data);
});

export default router;
