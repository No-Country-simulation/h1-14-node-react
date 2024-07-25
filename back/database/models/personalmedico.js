"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonalMedico extends Model {
    static associate(models) {
      PersonalMedico.hasOne(models.Users, {
        as: "Datos Personales",
        foreignKey: "usuariosId",
      });
    }
  }
  PersonalMedico.init(
    {
      // id: {type: DataTypes.INTEGER, primarykey: true, autoIncrement:true},
      especialidadesId: { type: DataTypes.INTEGER, allowNull: false },
      usuariosId: { type: DataTypes.INTEGER, allowNull: false },
      numeroMatricula: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "PersonalMedico",
    }
  );
  return PersonalMedico;
};
