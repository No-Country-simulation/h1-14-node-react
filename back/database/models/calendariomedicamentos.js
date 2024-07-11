"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CalendarioMedicamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CalendarioMedicamentos.init(
    {
      id: { type: DataTypes.INTEGER, primarykey: true, autoIncrement: true },
      time: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      medicamentosId: { type: DataTypes.INTEGER },
      active: { type: DataTypes.BOOLEAN, defaultValue: true },
    },{
      timestamps: true,
    },
    {
      sequelize,
      modelName: "CalendarioMedicamentos",
    }
  );
  return CalendarioMedicamentos;
};
