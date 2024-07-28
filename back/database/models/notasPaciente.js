"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notasPaciente extends Model {
    static associate(models) {}
  }
  notasPaciente.init(
    {
      id: DataTypes.INTEGER,
      pacienteId: DataTypes.INTEGER,
      tipoNota: {
        type: DataTypes.ENUM("Sintomas", "Preguntas", "Emociones"),
        defaultValue: "Preguntas",
      },
      descripcion: DataTypes.STRING,
      dataTime: DataTypes.INTEGER,
      marcada: DataTypes.BOOLEAN,
      activo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "notasPaciente",
      timestamps: true,
    }
  );
  return notasPaciente;
};
