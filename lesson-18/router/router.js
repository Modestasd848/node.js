import express from 'express';
import {
  createNewCustomer,
  getAllCustomers,
} from '../controllers/customerController.js';
import {
  addOrdersBulk,
  createNewOrder,
  getAllCustomersOrdersById,
} from '../controllers/orderController.js';
import {
  validateId,
  validateOrderBody,
  validateCustomerBody,
  validateOrderBodyBulk,
} from '../middleware/validators.js';
const router = express.Router();

router.post('/customer', validateCustomerBody, createNewCustomer);
router.post(
  '/customer/:id/order',
  validateId,
  validateOrderBody,
  createNewOrder
);
router.get('/customer/:id/order', validateId, getAllCustomersOrdersById);
router.get('/customer', getAllCustomers);
router.post(
  '/customer/:id/order/bulk',
  validateId,
  addOrdersBulk,
  validateOrderBodyBulk
);

export default router;
