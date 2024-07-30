'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NotasPaciente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pacienteId: {
        type: Sequelize.INTEGER
      },
      tipoNota: {
        type: Sequelize.ENUM("Sintomas", "Preguntas", "Emociones"),
        defaultValue: "Preguntas",
      },
      descripcion: {
        type: Sequelize.STRING
      },
      dataTime: {
        type: Sequelize.INTEGER
      },
      marcada: {
        type: Sequelize.BOOLEAN
      },
      activo: { type: Sequelize.BOOLEAN },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('NotasPaciente');
  }
};