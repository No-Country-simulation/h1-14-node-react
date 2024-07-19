const { Sequelize, DataTypes } = require('sequelize');
const { database, username, password, host, dialect, port } = require('../../config/config');

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  port: port,
});
const PersonalMedico = sequelize.define('PersonalMedico', {
      id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
      especialidadesId: {type: DataTypes.INTEGER, allowNull: false},
      usuariosId: {type: DataTypes.INTEGER, allowNull: false},
      numeroMatricula: {type: DataTypes.STRING, allowNull: false},
      active: {type: DataTypes.BOOLEAN, defaultValue: true}, 
    },
    {
      timestamps: true,
    }, {
    sequelize,
    modelName: 'PersonalMedico',
  });
  module.exports = PersonalMedico;