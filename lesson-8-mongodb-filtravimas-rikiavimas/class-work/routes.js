import express from 'express';
import {
  getAllUsers,
  getUserById,
  getAllUsersByName,
  createNewUser,
  deleteUserById,
  updateUserById,
} from './controllers.js';

const router = express.Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/name/:name', getAllUsersByName);

router.post('/users', createNewUser);

router.delete('/users/:id', deleteUserById);

router.put('/users/:id', updateUserById);

export default router;
