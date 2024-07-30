"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class calendarioPaciente extends Model {
    static associate(models) {}
  }
  calendarioPaciente.init(
    {
      id: DataTypes.INTEGER,
      pacienteId: DataTypes.INTEGER,
      tipoEvento: {
        type: DataTypes.ENUM("Actividad Fisica", "Alimentacion", "Medicación", "Medico General", "Psicoterapia"),
        defaultValue: "Medicación",
      },
      evento: DataTypes.STRING,
      dataTime: DataTypes.INTEGER,
      estado: {
        type: DataTypes.ENUM("Undone", "Pending", "Done"),
        defaultValue: "Pending",
      },
      dias: DataTypes.INTEGER,
      vecesxdia: DataTypes.INTEGER,
      activo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "calendarioPaciente",
      timestamps: true,
    }
  );
  return calendarioPaciente;
};
