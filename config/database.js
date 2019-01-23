const Sequelize = require('sequelize');

const database = new Sequelize(
  'graphql',
  'root',
  'test',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      socketPath: '/var/run/mysqld/mysqld.sock',
    },
  },
);


module.exports = database;
