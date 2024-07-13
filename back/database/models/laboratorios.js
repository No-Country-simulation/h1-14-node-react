'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Laboratorios.init({
    id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}, 
    active: {type: DataTypes.BOOLEAN, defaultValue: true}, 
  },
  {
    timestamps: true,
  }, {
    sequelize,
    modelName: 'Laboratorios',
  });
  return Laboratorios;
};