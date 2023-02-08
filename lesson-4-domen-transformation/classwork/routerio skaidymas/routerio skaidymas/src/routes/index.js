import express from 'express';

import booksRouter from './v1/books/index.js';
import carsRouter from './v1/cars/index.js';
import moviesRouter from './v1/movies/index.js';

import booksRouter2 from './v1/books/index.js';
import carsRouter2 from './v1/cars/index.js';
import moviesRouter2 from './v1/movies/index.js';

const router = express.Router();

router.use('/api/v1', booksRouter, carsRouter, moviesRouter);

router.use('/api/v2', booksRouter2, carsRouter2, moviesRouter2);

export default router;
