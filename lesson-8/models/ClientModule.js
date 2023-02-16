import mongoose from 'mongoose';

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 200,
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'orders' }],
});

const ClientModel = mongoose.model('clients', clientSchema);

export default ClientModel;
