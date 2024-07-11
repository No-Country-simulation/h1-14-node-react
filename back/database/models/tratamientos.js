"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tratamientos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tratamientos.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      description: { type: DataTypes.STRING, allowNull: false },
      patologiasId: { type: DataTypes.INTEGER, allowNull: false },
      pacientesId: { type: DataTypes.INTEGER, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
    },
    {
      sequelize,
      modelName: "Tratamientos",
    }
  );
  return Tratamientos;
};
