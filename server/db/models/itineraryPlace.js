const Sequelize = require('sequelize');
const db = require('../connection.js');

const PlaceItinerary = db.define('placeItinerary', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  itinerary_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  place_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = PlaceItinerary;
