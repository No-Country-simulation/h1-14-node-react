'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalMedico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalMedico.init(
    {
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
  return PersonalMedico;
};