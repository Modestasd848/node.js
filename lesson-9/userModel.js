import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  lastName: String,
  age: Number,
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  userName: String,
  deleted: {
    type: Boolean,
    default: false,
  },
});

const userModel = mongoose.model('user', userSchema);

export default userModel;
