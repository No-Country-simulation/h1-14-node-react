"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pacientes.init(
    {
      // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
      modelName: 'Pacientes',
    }
  );
  return Pacientes;
};