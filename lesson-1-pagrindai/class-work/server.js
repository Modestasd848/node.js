const http = require('http');

const port = 5000;

const cars = [
  { id: 1, make: 'Audi' },
  { id: 2, make: 'BMW' },
  { id: 3, make: 'Opel' },
];

const movies = [
  { id: 1, name: 'Harry Potter' },
  { id: 2, name: 'Spiderman' },
  { id: 3, name: 'Superman' },
];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/cars':
      res.write(JSON.stringify(cars));
      res.end();
      break;
    case '/movies':
      res.write(JSON.stringify(movies));
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.end('This does not exist');
  }
});

server.listen(port, () => {
  console.log('Server is listening in port ' + port);
});
