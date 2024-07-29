"use strict";

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      dniType: {
        type: DataTypes.ENUM(
          "DNI",
          "LIBRETA DE ENROLAMIENTO",
          "LIBRETA CIVICA"
        ),
        defaultValue: "DNI",
        allowNull: false,
      },
      dni: { type: DataTypes.INTEGER },
      password: { type: DataTypes.STRING },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      birthday: { type: DataTypes.DATE },
      role: {
        type: DataTypes.ENUM("ADMINISTRADOR", "MEDICO", "PACIENTE"),
        defaultValue: "PACIENTE",
        allowNull: false,
      },
      gender: { type: DataTypes.STRING, allowNull: true },
      email: { type: DataTypes.STRING, allowNull: true },
      phone: { type: DataTypes.STRING, allowNull: true },
      active: { type: DataTypes.BOOLEAN },
    },
    {
      tableName: "Users",
      timestamps: false,
    }
  );

  Users.associate = function (models) {
    // define association here
    Users.hasOne(models.Ubicaciones, {
      as: "domicilio",
      foreignKey: "usuariosId",
    });
  };

  return Users;
};
