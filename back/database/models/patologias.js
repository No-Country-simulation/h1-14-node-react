"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patologias extends Model {
    static associate(models) {
      Patologias.hasMany(models.Especialidades, {
        as: "Especialidad",
        foreignKey: "especialidadesId",
      }),
        Patologias.hasMany(models.Tratamientos, {
          as: "Tratamientos",
          foreignKey: "tratamientosId",
        });
    }
  }
  Patologias.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      especialidadesId: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Patologias",
      tableName: "Patologias",
    }
  );
  return Patologias;
};
