import mongoose from 'mongoose';
import User from './userModel.js';

export async function deleteById(req, res) {
  try {
    const { id } = req.params;
    const resp = await User.findByIdAndDelete(id);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteAllByName(req, res) {
  try {
    const { name } = req.params;

    const resp = await User.deleteMany({ name: name });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function softDeleteById(req, res) {
  try {
    const { id } = req.params;

    const resp = await User.updateOne({ id: id }, { deleted: true });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function deleteParameterFromAll(req, res) {
  try {
    const { param } = req.params;

    const keyToDelete = {};
    keyToDelete[param] = undefined;

    const resp = await User.updateMany({}, keyToDelete);

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function createNewUser(req, res) {
  try {
    const { name, lastName, age, userName } = req.body;

    const user = await User.create({
      name,
      lastName,
      age,
      userName,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.find({ deleted: false });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
