import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
    minLength: 5,
    maxLength: 50,
  },
  content: {
    type: String,
    minLength: 10,
  },
  dateCreated: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const blogModel = mongoose.model('blog', blogSchema);

export default blogModel;
