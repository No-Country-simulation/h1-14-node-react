"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonalMedicoPaciente extends Model {
    static associate(models) {
      PersonalMedicoPaciente.hasMany(models.Pacientes, {
        as: "Pacientes",
        foreignKey: "pacientesId",
      }),
        PersonalMedicoPaciente.hasMany(models.PersonalMedico, {
          as: "PersonalMedico",
          foreignKey: "personalMedicoId",
        });
    }
  }
  PersonalMedicoPaciente.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      pacientesId: { type: DataTypes.INTEGER },
      personalMedicoId: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "PersonalMedicoPaciente",
      tableName: "PersonalMedicoPaciente",
    }
  );
  return PersonalMedicoPaciente;
};
