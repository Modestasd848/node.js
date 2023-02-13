import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || ' ';

app.use(express.json());
app.use(router)

mongoose.connect(MONGO_URI, () => {
    console.log('connected ');
});

app.listen(PORT, () => {
    console.log(`server is listening in port ${PORT}`);
});