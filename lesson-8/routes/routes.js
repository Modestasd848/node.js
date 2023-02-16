import express from 'express';
import {
  createNewClient,
  addNewOrder,
  getUserWithAllHisOrders,
} from '../controllers/controllers.js';
const router = express.Router();

router.post('/client', createNewClient);

router.post('/order/:clientId', addNewOrder);

router.get('/client/:id', getUserWithAllHisOrders);

export default router;
