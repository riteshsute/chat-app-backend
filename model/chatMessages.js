const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Users = require('./signupModel')

const UserMessages = sequelize.define('messages', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});  

Users.hasMany(UserMessages);
UserMessages.belongsTo(Users);

module.exports = UserMessages;
