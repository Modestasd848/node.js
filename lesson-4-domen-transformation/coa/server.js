import express from 'express';
import cors from 'cors';
import router from './routes/mainRouter.js';

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('app is running on port ' + PORT);
});
