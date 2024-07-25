'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ubicaciones extends Model {
    static associate(models) {
      ubicaciones.belongsTo(models.Users, {as: "residente", foreignKey: "usuariosId"})
    }
  }
  ubicaciones.init({
    // id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
    usuariosId: { type: DataTypes.INTEGER, allowNull: false },
    pais: { type: DataTypes.STRING, allowNull: false },
    provincias: { type: DataTypes.STRING, allowNull: false },
    localidad: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    active: { type: DataTypes.BOOLEAN, defaultValue: true },
  }, {
    sequelize,
    modelName: 'Ubicaciones',
    timestamps: false,
  });
  return ubicaciones;
};