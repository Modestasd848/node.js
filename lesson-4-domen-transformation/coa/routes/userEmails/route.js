import express from 'express';
import email from '../../db/index.js';
const router = express.Router();

router.get('/email', (req, res) => {
  res.json(email);
});

export default router;
