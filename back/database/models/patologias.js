"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Patologias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patologias.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, allowNull: false },
      especialidadesId: { type: DataTypes.INTEGER, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
    },
    {
      sequelize,
      modelName: "Patologias",
    }
  );
  return Patologias;
};
