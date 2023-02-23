import express from 'express';
import {
  getAllProducts,
  createNewProduct,
  getProductById,
} from '../controllers/controller.js';
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products', createNewProduct);
router.put('/products/:id');
router.delete('/products/:id');

export default router;
