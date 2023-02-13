import express from 'express';
import dotenv from 'dotenv';
import eslint from 'eslint';
import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
  MONGO_URI,
  () => {
    console.log('connected to MongoDB');
  },
  (e) => {
    console.log(e);
  }
);

const PORT = 3000;
const app = express();

app.use(express.json());

app.get()

app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
});