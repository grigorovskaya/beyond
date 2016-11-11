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
  //TODO: fix allowNull
  address: {
    type: Sequelize.STRING,
    allowNull: true
  },

  lat: {
    type: Sequelize.FLOAT,
    allowNull: true
  },

  lng: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  //TODO: fix allowNull and default
  fullDay: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  
  category: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Place;
