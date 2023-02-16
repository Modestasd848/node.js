import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI, () => {
  console.log('Connected');
});

const app = express();

app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`);
});
