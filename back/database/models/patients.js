const { Sequelize, DataTypes } = require('sequelize');
const { database, username, password, host, dialect, port } = require('../../config/config');

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  port: port,
});

const Patients = sequelize.define('Patients', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      entidadesId: { type: DataTypes.INTEGER },
      financiadoresId: { type: DataTypes.INTEGER },
      personalMedicoId: { type: DataTypes.INTEGER },
      patologiasId: { type: DataTypes.INTEGER },
      usuarioID: { type: DataTypes.INTEGER },
      factorSanguineo: { type: DataTypes.INTEGER },
      Activo: { type: DataTypes.BOOLEAN },
    },
    {
      timestamps: true,
    },{
      sequelize,
      modelName: 'Patients',
    });
  
    module.exports = Patients;