import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './User.js';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,
  () => {
    console.log('connected to MongoDB');
  },
  (e) => {
    console.log(e);
  }
);

async function getUsers() {
  try {
    // const users = await User.find({ name: 'Mode', age: 24 }, { name: true, age: true});
    // const users = await User.count();
    const user = await User.findOne({ 'address.number': 37 });
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

async function getUsersWhere() {
  const users = await User.where('age').lt(27).sort({ age: -1 }).limit(1);

  console.log(users);
}

getUsersWhere();

async function updateUsers() {
  //   const user = await User.updateOne(
  //     { name: 'Mode' },
  //     {
  //       $set: {
  //         name: 'Andrius',
  //         age: 40,
  //       },
  //     }
  //   );

  const users = await User.updateMany(
    { age: 24 },
    {
      address: {
        street: 'Kauno',
        number: '7B',
      },
    }
  );
  console.log(users);
}

async function deleteUsers() {
  //   const users = await User.findByIdAndDelete('63e6bb60ccf3dff586f5893b');
  const users = await User.deleteMany({
    name: 'Andrius',
  });

  console.log(users);
}

// deleteUsers();

// updateUsers();

async function createUser() {
  //   const user = new User({
  //     name: 'Modestas',
  //     age: 23,
  //   });
  //   user.save();
  try {
    const user = await User.create({
      name: 'Mode',
      age: 24,
      hobbies: ['Soccer', 'Play video games'],
      address: {
        street: 'Sodžiaus gatve',
        number: 37,
      },
    });

    user.name = 'Petras';
    user.save();

    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
}
