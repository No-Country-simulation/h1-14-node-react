const { Sequelize, DataTypes } = require('sequelize');
const { database, username, password, host, dialect, port } = require('../../config/config');

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  port: port,
});

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  dniType: { type: DataTypes.ENUM('DNI', 'LIBRETA DE ENROLAMIENTO', 'LIBRETA CIVICA'), defaultValue: 'DNI', allowNull: false },
  dni: { type: DataTypes.INTEGER, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  brithday: { type: DataTypes.DATE, allowNull: false }, 
  role: { type: DataTypes.ENUM('ADMINISTRADOR', 'MEDICO', 'PACIENTE'), defaultValue: 'PACIENTE', allowNull: false },
  gender: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: true },
  phone: { type: DataTypes.STRING, allowNull: true },
  active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, {
  timestamps: true,
  sequelize,
  modelName: 'User'
});

module.exports = User;

