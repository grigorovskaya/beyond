const Sequelize = require('sequelize');

const connection = new Sequelize('beyond', 'beyond', '', {
  host: 'postgres',
  dialect: 'postgres'
});

module.exports = connection;
