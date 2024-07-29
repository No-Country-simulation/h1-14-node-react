"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recetas extends Model {
    static associate(models) {
      Recetas.hasMany(models.Tratamientos, {
        as: "Tratamientos",
        foreignKey: "tratamientosId",
      }),
        Recetas.hasMany(models.Medicamentos, {
          as: "Medicamentos",
          foreignKey: "medicamentosId",
        }),
        Recetas.hasMany(models.PersonalMedico, {
          as: "PersonalMedico",
          foreignKey: "personalMedicoId",
        });
    }
  }
  Recetas.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      description: { type: DataTypes.STRING, allowNull: false },
      tratamientosId: { type: DataTypes.INTEGER, allowNull: false },
      medicamentosId: { type: DataTypes.INTEGER, allowNull: false },
      personalMedicoId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Recetas",
      tableName: "Recetas",
      timestamps: true,
    }
  );
  return Recetas;
};
