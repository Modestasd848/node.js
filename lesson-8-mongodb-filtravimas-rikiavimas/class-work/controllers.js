import User from './UserModel.js';

export async function getAllUsers(req, res) {
  const users = await User.find();

  res.json(users);
}

export async function getUserById(req, res) {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json(user);
}

export async function getAllUsersByName(req, res) {
  const { name } = req.params;
  const users = await User.find({ name });

  res.json(users);
}

export async function createNewUser(req, res) {
  const { name, lastName, age } = req.body;
  const user = {
    name,
    lastName,
    age,
  };
  const userSaved = await User.create(user);

  res.json(userSaved);
}

export async function deleteUserById(req, res) {
  const { id } = req.params;
  const respDB = await User.findByIdAndDelete(id);

  res.json(respDB);
}

export async function updateUserById(req, res) {
  const { name, lastName, age } = req.body;
  const { id } = req.params;

  const user = await User.updateOne({ _id: id }, { name, lastName, age });

  res.json(user);
}
