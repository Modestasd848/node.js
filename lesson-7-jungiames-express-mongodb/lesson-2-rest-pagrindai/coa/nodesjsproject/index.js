const express = require('express');
const cors = require('cors');
const app = express();
const car = ['BMW', 'VW', 'Porsche'];

app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);

app.get('/', cors(), (req, res) => {
  res.send(car);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
