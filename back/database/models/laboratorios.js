"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Laboratorios extends Model {
    static associate(models) {
      // define association here
    }
  }
  Laboratorios.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Laboratorios",
      tableName: "Laboratorios",
    }
  );
  return Laboratorios;
};
