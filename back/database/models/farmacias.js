"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Farmacia extends Model {
    static associate(models) {
      Farmacia.hasMany(models.Laboratorios, {
        as: "Laboratorios",
        foreignKey: "laboratoriosId",
      });
    }
  }
  Farmacia.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      laboratoriosId: { type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Farmacia",
      tableName: "Farmacia",
      timestamps: true,
    }
  );
  return Farmacia;
};
