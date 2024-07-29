"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medicamentos extends Model {
    static associate(models) {
      Medicamentos.hasMany(models.Patologias, {
        as: "Patologias",
        foreignKey: "patologiasId",
      }),
        Medicamentos.hasMany(models.Tratamientos, {
          as: "Tratamientos",
          foreignKey: "tratamientosId",
        }),
        Medicamentos.hasMany(models.Farmacias, {
          as: "Famacias",
          foreignKey: "farmaciasId",
        });
    }
  }
  Medicamentos.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      patologiasId: { type: DataTypes.INTEGER },
      tratamientosId: { type: DataTypes.INTEGER },
      farmaciasId: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Medicamentos",
      tableName: "Medicamentos",
    }
  );
  return Medicamentos;
};
