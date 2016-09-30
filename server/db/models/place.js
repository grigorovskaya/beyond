const Sequelize = require('sequelize');
const db = require('../connection.js');

let Place = db.define('place', {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  },

  location: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lat: {
    type: Sequelize.FLOAT,
    allowNull: true
  },

  lng: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  
  fullDay: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  
  category: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Place;
