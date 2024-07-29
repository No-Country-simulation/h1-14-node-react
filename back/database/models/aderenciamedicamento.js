"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class aderenciaMedicamento extends Model {
    static associate(models) {
      aderenciaMedicamento.hasMany(models.CalendarioMedicamentos, {
        as: "Recordatorio",
        foreignKey: "calendarioMedicamentosId",
      });
    }
  }
  aderenciaMedicamento.init(
    {
      id: DataTypes.INTEGER,
      calendarioMedicamentosId: DataTypes.INTEGER,
      tomoMedicamento: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "aderenciaMedicamento",
      tableName: "aderenciaMedicamento",
      timestamps: true,
    }
  );
  return aderenciaMedicamento;
};
