const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  storage: ':memory:',
  logging: false,
});

module.exports = sequelize;
