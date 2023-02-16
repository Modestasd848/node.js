import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/routes.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, () => {
  console.log('Connected');
});

const app = express();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
