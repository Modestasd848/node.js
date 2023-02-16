import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import router from './router.js';
dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || '';
console.log(MONGO_URI);

mongoose.connect(MONGO_URI, () => {
  console.log('Connected');
});

const app = express();
app.use(router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
