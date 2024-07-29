"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tratamientos extends Model {
    static associate(models) {
      Tratamientos.belongsTo(models.Patologias, {
        as: "Patologias",
        foreignKey: "patologiasId",
      });
      Tratamientos.belongsTo(models.Pacientes, {
        as: "Pacientes",
        foreignKey: "pacientesId",
      });
      Tratamientos.belongsTo(models.PersonalMedico, {
        as: "PersonalMedico",
        foreignKey: "personalMedicoId",
      });
    }
  }
  Tratamientos.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.STRING, allowNull: false },
      patologiasId: { type: DataTypes.INTEGER, allowNull: false },
      pacientesId: { type: DataTypes.INTEGER, allowNull: false },
      personalMedicoId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Tratamientos",
      tableName: "Tratamientos",
      timestamps: true,
    }
  );
  return Tratamientos;
};
