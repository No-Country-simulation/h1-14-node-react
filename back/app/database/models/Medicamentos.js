'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medicamentos extends Model {
    static associate(models) {    }
  }
  Medicamentos.init({
      // id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
      name: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.STRING, allowNull: false}, 
      patologiasId: {type: DataTypes.INTEGER},
      tratamientosId: {type: DataTypes.INTEGER},
      farmaciasId: {type: DataTypes.INTEGER},
      active: {type: DataTypes.BOOLEAN, defaultValue: true}, 
    },
    {
      timestamps: true,
    sequelize,
    modelName: 'Medicamentos',
  });
  return Medicamentos;
};