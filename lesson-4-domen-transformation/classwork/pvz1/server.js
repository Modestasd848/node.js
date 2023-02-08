import express from 'express';

const PORT = 3000;
const app = express();

app.get('/api', (req, res) => {
  res.send('Labas');
});

app.get('/api/users/:userId/posts/:postId', (req, res) => {
  res.send(`userId: ${req.params.userId} postId: ${req.params.postId}`);
});

app.get('/app:id', (req, res) => {
  res.send(`${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
