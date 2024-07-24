"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Especialidades extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Especialidades.init(
    {
      // d: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "Especialidades",
      timestamps: true,
    }
  );
  return Especialidades;
};
