"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Ubicaciones extends Model {
    static associate(models) {
      Ubicaciones.belongsTo(models.Users, {
        as: "residente",
        foreignKey: "usuariosId",
      });
    }
  }
  Ubicaciones.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      usuariosId: { type: DataTypes.INTEGER, allowNull: false },
      pais: { type: DataTypes.STRING, allowNull: false },
      provincias: { type: DataTypes.STRING, allowNull: false },
      localidad: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Ubicaciones",
      tableName: "Ubicaciones",

      timestamps: false,
    }
  );
  return Ubicaciones;
};
