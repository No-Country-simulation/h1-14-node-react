'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalMedicoPaciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalMedicoPaciente.init({
    id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
    pacientesId: {type: DataTypes.INTEGER},
    personalMedicoId: {type: DataTypes.INTEGER},
    active: {type: DataTypes.BOOLEAN, defaultValue: true}, 
  },
  {
    timestamps: true,
  },{
    sequelize,
    modelName: 'PersonalMedicoPaciente',
  });
  return PersonalMedicoPaciente;
};