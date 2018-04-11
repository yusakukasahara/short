const generate = require('nanoid/generate');

module.exports = (sequelize, DataTypes) => {
  let Url = sequelize.define('url', {
    hash: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
      instanceMethods: {
        generateHash: function (models) {
          return generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6)
        }
      }
    });
  return Url;
};

// const generateId = () => {
//   generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6)
// }

// console.log(generateId);
// console.log(generate('abcdefghijkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVQXYZ1234567890', 6))