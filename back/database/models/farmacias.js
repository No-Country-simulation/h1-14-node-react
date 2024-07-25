'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Farmacia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Farmacia.init({
    // id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
    laboratoriosId: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}, 
    active: {type: DataTypes.BOOLEAN, defaultValue: true}, 
  },
  {
    sequelize,
    modelName: 'Farmacia',
    timestamps: true,
  });
  return Farmacia;
};