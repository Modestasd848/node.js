import express from 'express';

import carsRouter from './userCars/route.js';
import usersDataRouter from './userData/route.js';
import emailsRouter from './userEmails/route.js';
import GenderRouter from './userGender/route.js';
import userIdRouter from './userId/route.js';

const router = express.Router();

export default router;
