"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pacientes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      entidadesId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Entidades",
          key: "id",
        },
      },
      financiadoresId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Financiadores",
          key: "id",
        },
      },
      personalMedicoId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PersonalMedico",
          key: "id",
        },
      },
      patologiasId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patologias",
          key: "id",
        },
      },
      usuarioID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      factorSanguineo: {
        type: Sequelize.ENUM(
          "A+", 
          "A-", 
          "B+", 
          "B-", 
          "AB+", 
          "AB-", 
          "O+", 
          "O-",
        "Pendiente"),
          defaultValue: "Pendiente",
      },
      Activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("Pacientes");
  },
};
