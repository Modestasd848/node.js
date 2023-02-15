import mongoose from 'mongoose';

const PetSchema = mongoose.Schema({
    name: String,
    type: String,
    age: Number,
});

const PetModel = mongoose.model('Pets', PetSchema);

export default PetModel;