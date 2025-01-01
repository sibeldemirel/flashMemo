const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
