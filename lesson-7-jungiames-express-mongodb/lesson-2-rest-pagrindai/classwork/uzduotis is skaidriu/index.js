const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

const names = ['Alex', 'Rose', 'Megan'];

app.use(
  cors({
    origin: 'http://127.0.0.1:5500',
  })
);

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json(names);
});

app.get('/api/users/:firstLetter', (req, res) => {
  const { firstLetter } = req.params;

  const filtered = names.filter(
    (name) => name[0] === firstLetter.toUpperCase()
  );

  res.json(filtered);
});

app.post('/api/users/', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  names.push(name);

  res.json(names);
});

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
