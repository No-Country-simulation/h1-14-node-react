"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prescripcion extends Model {
    static associate(models) {}
  }
  Prescripcion.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      tipoNota: {
        type: DataTypes.ENUM("Medicina Esencial", "Tratamimento Complementario", "Otras Indicaciones"),
        defaultValue: "Otras Indicaciones",
      },
      descripcion: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      pacienteId: { type: DataTypes.INTEGER, allowNull: false },
      activo: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Prescripcion",
      timestamps: true,
    }
  );
  return Prescripcion;
};
