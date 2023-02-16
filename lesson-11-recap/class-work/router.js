import express from 'express';
import {
  getAllCategories,
  getAllProductsWithCategories,
  postTest,
  getCategoryValue,
} from './controllers.js';
const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/products', getAllProductsWithCategories);
router.get('/categoryvalue', getCategoryValue);
router.post('/categories', postTest);

export default router;
