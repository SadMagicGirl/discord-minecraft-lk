const { DataTypes } = require('sequelize')
const db = require('../db')

const Users = db.define('users', 
{
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discord_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    skin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    cloak: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
  timestamps: false
})

// Users.sync({ alter: true }).then(() => console.log('Users table created or modified'));
//! Table creation. Uncomment to create table

module.exports = Users``