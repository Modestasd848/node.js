const casual = require('casual');

console.log(casual.city);
console.log(Math.floor(Math.random() * 10 + 1));
console.log(casual.suffix + ' ' + casual.first_name + ' ' + casual.last_name);
console.log(
  'Mr Modestas Dzemida' + casual.suffix + casual.first_name + casual.last_name
);
