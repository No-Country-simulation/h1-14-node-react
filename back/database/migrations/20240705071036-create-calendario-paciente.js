'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CalendarioPaciente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pacienteId: {
        type: DataTypes.INTEGER
      },
      tipoEvento: {
        type: Sequelize.ENUM("Actividad Fisica", "Alimentacion", "Medicación", "Medico General", "Psicoterapia"),
        defaultValue: "Medicación",
      },
      evento: { type: Sequelize.STRING },
      dataTime: { type: Sequelize.INTEGER },
      estado: {
        type: Sequelize.ENUM("Undone", "Pending", "Done"),
        defaultValue: "Pending",
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
    await queryInterface.dropTable('CalendarioPaciente');
  }
};