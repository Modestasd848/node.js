import mongoose from 'mongoose';

const CarSchema = mongoose.Schema({
  make: String,
  year: Number,
  price: Number,
});

const CarModel = mongoose.model('cars', CarSchema);

export default CarModel;
