const Sequelize = require('sequelize');
const db = require('../connection.js');

let Itinerary = db.define('itinerary', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: true
  },

  startDate: {
    type: Sequelize.DATE,
    allowNull: true
  },

  endDate: {
    type: Sequelize.DATE,
    allowNull: true
  }
});

module.exports = Itinerary;
