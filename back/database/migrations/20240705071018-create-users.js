"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      dniType: {
        type: Sequelize.ENUM(
          "DNI",
          "LIBRETA DE ENROLAMIENTO",
          "LIBRETA CIVICA"
        ),
        defaultValue: "DNI",
        allowNull: false,
      },
      dni: { 
        type: Sequelize.INTEGER 
      },
      password: { 
        type: Sequelize.STRING 
      },
      firstName: { 
        type: Sequelize.STRING 
      },
      lastName: { 
        type: Sequelize.STRING 
      },
      birthday: { 
        type: Sequelize.DATE 
      },
      role: {
        type: Sequelize.ENUM("ADMINISTRADOR", "MEDICO", "PACIENTE"),
        defaultValue: "PACIENTE",
        allowNull: false,
      },
      gender: { 
        type: Sequelize.STRING, 
        allowNull: true 
      },
      email: { 
        type: Sequelize.STRING, 
        allowNull: true 
      },
      phone: { 
        type: Sequelize.STRING, 
        allowNull: true 
      },
      active: { 
        type: Sequelize.BOOLEAN,
        defaultValue: true 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
