"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ubicacion.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      usuariosId: { type: DataTypes.INTEGER, allowNull: false },
      pais: { type: DataTypes.STRING, allowNull: false },
      provincias: { type: DataTypes.STRING, allowNull: false },
      localidad: { type: DataTypes.STRING, allowNull: false },
      direccion: { type: DataTypes.STRING, allowNull: false },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      timestamps: true,
    },
    {
      sequelize,
      modelName: "Ubicacion",
    }
  );
  return Ubicacion;
};
