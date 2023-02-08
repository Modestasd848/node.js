import express from 'express';

const PORT = 3000;
const app = express();

// Statinis
app.get('/api', (req, res) => {
  res.send('Labas');
});

//Dinaminis
app.get('/api/:id', (req, res) => {
  res.send(`${req.params.id}`);
});

//Dinaminis
app.get('/api/users/:userId/posts/:postId', (req, res) => {
  res.send(`userId: ${req.params.userId} postId: ${req.params.postId}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
