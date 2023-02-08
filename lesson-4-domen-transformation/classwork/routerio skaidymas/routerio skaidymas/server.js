import express from 'express';
import router from './src/routes/index.js';
const PORT = 3000;
const app = express();

app.use('/something', router);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
