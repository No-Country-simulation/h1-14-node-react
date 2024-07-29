"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    static associate(models) {
      Pacientes.hasMany(models.Financiadores, {
        as: "Finaciadores",
        foreignKey: "financiadoresId",
      }),
        Pacientes.hasMany(models.PersonalMedico, {
          as: "PersonalMedico",
          foreignKey: "personalMedicoId",
        }),
        Pacientes.hasMany(models.Patologias, {
          as: "Patologias",
          foreignKey: "patologiasId",
        }),
        Pacientes.hasOne(models.Users, {
          as: "Datos Personales",
          foreignKey: "usuariosId",
        });
    }
  }
  Pacientes.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      entidadesId: { type: DataTypes.INTEGER },
      financiadoresId: { type: DataTypes.INTEGER },
      personalMedicoId: { type: DataTypes.INTEGER },
      patologiasId: { type: DataTypes.INTEGER },
      usuarioID: { type: DataTypes.INTEGER },
      factorSanguineo: { type: DataTypes.INTEGER },
      Activo: { type: DataTypes.BOOLEAN },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Pacientes",
      tableName: "Pacientes",
    }
  );
  return Pacientes;
};
