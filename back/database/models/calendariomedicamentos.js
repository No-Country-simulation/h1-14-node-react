"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CalendarioMedicamentos extends Model {
    static associate(models) {
      CalendarioMedicamentos.hasOne(models.Medicamentos, {
        as: "Medicamentos",
        foreignKey: "medicamentosId",
      });
    }
  }
  CalendarioMedicamentos.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      time: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      medicamentosId: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "CalendarioMedicamentos",
      tableName: "CalendarioMedicamentos",
      timestamps: true,
    }
  );
  return CalendarioMedicamentos;
};
