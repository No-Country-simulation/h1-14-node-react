"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class calendarioDoctor extends Model {
    static associate(models) {}
  }
  calendarioDoctor.init(
    {
      id: DataTypes.INTEGER,
      personalMedicoId: DataTypes.INTEGER,
      tipoEvento: {
        type: DataTypes.ENUM("Consulta", "SobreTurno", "Junta Medica"),
        defaultValue: "Consulta",
      },
      evento: DataTypes.STRING,
      dataTime: DataTypes.INTEGER,
      estado: {
        type: DataTypes.ENUM("Undone", "Pending", "Done"),
        defaultValue: "Pending",
      },
      activo: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "calendarioDoctor",
      timestamps: true,
    }
  );
  return calendarioDoctor;
};
