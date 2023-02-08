import express from 'express';
import gender from '../../db/index.js';
const router = express.Router();

router.get('/gender', (req, res) => {
  res.json(gender);
});

export default router;
