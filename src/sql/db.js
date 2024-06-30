const Sequilize = require('sequelize');
const settings = require("../settings.json");

const bd_host = settings.sql.ip;
const bd_name = settings.sql.bd_name;
const bd_user = settings.sql.user;
const bd_pass = settings.sql.pass;


const db = new Sequilize(bd_name, bd_user, bd_pass, {
  host: bd_host,
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
  logging: settings.sql.logging
})

module.exports = db;