"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PersonalMedico extends Model {
    static associate(models) {
      PersonalMedico.hasOne(models.Users, {
        as: "Datos Personales",
        foreignKey: "usuariosId",
      });
      PersonalMedico.belongsTo(models.Especialidades, {
        foreignKey: "especialidadesId",
        as: "especialidad",
      });
    }
  }
  PersonalMedico.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      especialidadesId: { type: DataTypes.INTEGER, allowNull: false },
      usuariosId: { type: DataTypes.INTEGER, allowNull: false },
      numeroMatricula: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "PersonalMedico",
      tableName: "PersonalMedico",
    }
  );
  return PersonalMedico;
};
