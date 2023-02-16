import mongoose from 'mongoose';
const objectId = mongoose.Schema.Types.ObjectId;

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  categoryId: objectId,
});

const productModel = mongoose.model('products', productSchema);

export default productModel;
