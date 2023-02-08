import express from 'express';
import books from '../../../db/books.js';
const router = express.Router();

router.get('/books', (req, res) => {
  res.json(books);
});

export default router;
