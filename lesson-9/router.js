import express from 'express';
import {
  deleteAllByName,
  deleteById,
  softDeleteById,
  deleteParameterFromAll,
  createNewUser,
  getAllUsers,
} from './controller.js';
const router = express.Router();

router.delete('/user/:id', deleteById);
router.delete('/user/name/:name', deleteAllByName);
router.delete('/user/soft/:id', softDeleteById);
router.delete('/user/param/:param', deleteParameterFromAll);
router.post('/user', createNewUser);
router.get('/user', getAllUsers);

export default router;
