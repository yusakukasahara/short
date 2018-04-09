const generate = require('nanoid/generate');

const generateId = () => {
  generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6)
}

console.log(generateId);
console.log(generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6))