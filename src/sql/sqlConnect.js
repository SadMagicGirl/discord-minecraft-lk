const { Sequelize } = require('sequelize');
const db = require('./db')

db.authenticate()
  .catch(error => console.error(error))