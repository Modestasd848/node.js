import express from 'express';
const router = express.Router();

const books = [
  {
    name: 'Harry Potter',
    author: 'Some author',
  },

  {
    name: 'some other book',
    author: 'Some other author',
  },
];

router.get('/books', (req, res) => {
  res.json(books);
});

export default router;
