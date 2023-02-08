import express from 'express';

import booksRouter from './books.index.js';
import carsRouter from './cars.index.js';
import moviesRouter from './movies.index.js';

const router = express.Router();

router.use(booksRouter, carsRouter, moviesRouter);

export default router;
