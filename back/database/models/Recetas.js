"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recetas extends Model {
    static associate(models) {}
  }
  Recetas.init(
    {
      //id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      description: { type: DataTypes.STRING, allowNull: false },
      tratamientosId: { type: DataTypes.INTEGER, allowNull: false },
      medicamentosId: { type: DataTypes.INTEGER, allowNull: false },
      personalMedicoId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Recetas",
      timestamps: true,
    }
  );
  return Recetas;
};
