import express from 'express';
import {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  routeNotFound,
} from '../controllers/controller.js';
const router = express.Router();

// Pasiimma visus produktus
router.get('/product', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product', createNewProduct);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', deleteProductById);

router.all('*', routeNotFound);

export default router;
