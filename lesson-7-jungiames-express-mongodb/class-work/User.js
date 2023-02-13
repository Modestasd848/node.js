import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 150,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  hobbies: [String],
  address: {
    street: String,
    number: String,
  },
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
