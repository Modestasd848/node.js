import express from 'express';
import {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  routeNotFound,
  getProductPaginate,
} from '../controllers/controller.js';
import {
  checkIfAuthenticated,
  validateQuery,
} from '../middleware/middleware.js';

const router = express.Router();

// Pasiimma visus produktus
router.get('/product/pagination', validateQuery, getProductPaginate);
router.get('/product', getAllProducts);
router.get('/product/:id', checkIfAuthenticated, getProductById);
router.post('/product', checkIfAuthenticated, createNewProduct);
router.put('/product/:id', updateProductById);
router.delete('/product/:id', checkIfAuthenticated, deleteProductById);

router.all('*', routeNotFound);

export default router;
