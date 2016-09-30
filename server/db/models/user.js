const Sequelize = require('sequelize');
const db = require('../connection');

let User = db.define('user', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
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
  },

});

module.exports = User;

