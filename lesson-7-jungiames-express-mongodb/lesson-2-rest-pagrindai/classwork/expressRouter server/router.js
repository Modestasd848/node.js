const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ hello: 'this is written in a router' });
});

module.exports = router;
