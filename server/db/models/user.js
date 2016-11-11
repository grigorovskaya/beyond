const Sequelize = require('sequelize');
const db = require('../connection');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const pHash = Promise.promisify(bcrypt.hash);
const pCompare = Promise.promisify(bcrypt.compare);

let User = db.define('user', {
  
  username: {
    type: Sequelize.STRING,
    allowNull: true
  },

  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },

  facebookId: {
    type: Sequelize.STRING,
    allowNull: true
  },

  imageURL: {
    type: Sequelize.STRING,
    allowNull: true
  }
}, {
  instanceMethods: {
    verifyPassword: function(password) {
      return pCompare(password, this.password);
    }
  }
});

User.beforeCreate((user, options) => {
  return pHash(user.password, null, null)
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;

