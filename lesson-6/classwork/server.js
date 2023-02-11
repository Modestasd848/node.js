import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(
    MONGO_URI, 
    ()=> {
    console.log('connectedf to MongoDB');
},
 (e)=> {
     console.log(e);
});
