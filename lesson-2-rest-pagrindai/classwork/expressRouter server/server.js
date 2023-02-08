const express = require('express');
const router = require('./router');
const app = express();

app.use(router);

app.listen(4000, () => {
  console.log('app is running on port 4000');
});
