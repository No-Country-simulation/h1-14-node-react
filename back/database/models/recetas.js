"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recetas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recetas.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      description: { type: DataTypes.STRING, allowNull: false },
      tratamientosId: { type: DataTypes.INTEGER, allowNull: false },
      medicamentosId: { type: DataTypes.INTEGER, allowNull: false },
      personalMedicoId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
    },
    {
      sequelize,
      modelName: "Recetas",
    }
  );
  return Recetas;
};
