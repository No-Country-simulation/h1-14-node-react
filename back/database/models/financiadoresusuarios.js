"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FinanciadoresUsuarios extends Model {
    static associate(models) {}
  }
  FinanciadoresUsuarios.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      usuariosId: { type: DataTypes.INTEGER },
      financiadoresId: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "FinanciadoresUsuarios",
      tableName: "FinanciadoresUsuarios",
    }
  );
  return FinanciadoresUsuarios;
};
