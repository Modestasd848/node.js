import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  title: String,
  description: String,
});

const categoryModel = mongoose.model('categories', categorySchema);

export default categoryModel;
