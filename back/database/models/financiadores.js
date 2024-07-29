"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Financiadores extends Model {
    static associate(models) {
      Financiadores.hasMany(models.FinanciadoresUsuarios, {
        as: "Financiadores",
        foreignKey: "financiadoresId",
      });
    }
  }
  Financiadores.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Financiadores",
      tableName: "Financiadores",
    }
  );
  return Financiadores;
};
