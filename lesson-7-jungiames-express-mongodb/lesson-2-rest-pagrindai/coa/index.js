const cors = require('cors');

application = app.use(cors());

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('OK');
});

app.listen(3000, () => console.log('The server is running on port 8080'));
