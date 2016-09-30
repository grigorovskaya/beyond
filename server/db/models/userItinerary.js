const Sequelize = require('sequelize');
const db = require('../connection.js');

const UserItinerary = db.define('userItinerary', {
  id:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  itinerary_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = UserItinerary;
