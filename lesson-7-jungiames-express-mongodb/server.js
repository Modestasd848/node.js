import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './router.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

const app = express();
app.use(express.json());
app.use(router);

mongoose.connect(MONGO_URI, () => {
  console.log('connected ');
});

app.listen(PORT, () => {
  console.log(`Server listening om port ${PORT}`);
});
