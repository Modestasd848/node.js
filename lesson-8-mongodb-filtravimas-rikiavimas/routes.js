import express from 'express';
import User from './UserModel.js';

const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.find();

  res.json(users);
});

router.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json(user);
});

router.get('/users/name/:name', async (req, res) => {
  const { name } = req.params;
  const users = await User.find({ name });

  res.json(users);
});

router.post('/users', async (req, res) => {
  const { name, lastName, age } = req.body;
  const user = {
    name,
    lastName,
    age,
  };
  const userSaved = await User.create(user);

  res.json(userSaved);
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  const respDB = await User.findByIdAndDelete(id);

  res.json(respDB);
});

router.put('/users/:id', async (req, res) => {
  const { name, lastName, age } = req.body;
  const { id } = req.params;

  const user = await User.updateOne({ _id: id }, { name, lastName, age });

  res.json(user);
});

export default router;
