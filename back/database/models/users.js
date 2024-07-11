"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Users",
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        dniType: {
          type: DataTypes.ENUM("DNI", "LIBRETA DE ENROLAMIENTO", "LIBRETA CIVICA"),
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
        timestamps: true,
      },
      {
        sequelize,
        modelName: "Users",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
