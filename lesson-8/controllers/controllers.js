import Order from '../models/OrderModule.js';
import Client from '../models/ClientModule.js';
import mongoose from 'mongoose';

export async function createNewClient(req, res) {
  try {
    const { name, lastName } = req.body;

    const client = {
      name,
      lastName,
    };

    const clientRes = await Client.create(client);

    res.json(clientRes);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function addNewOrder(req, res) {
  try {
    const { clientId } = req.params;
    const { name, price } = req.body;

    const order = await Order.create({
      name,
      price,
      clientId: mongoose.Types.ObjectId(clientId),
    });

    const client = await Client.findById(clientId);
    client.orders.push(mongoose.Types.ObjectId(order._id));
    client.save();

    res.json(order);
  } catch (error) {
    res.status(500).json({ error });
  }
}

export async function getUserWithAllHisOrders(req, res) {
  try {
    const { id } = req.params;
    const client = await Client.findById(id).populate('orders');

    res.json(client);
  } catch (error) {
    res.status(500).json({ error });
  }
}
