'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recetas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      tratamientosId: {
         type: Sequelize.INTEGER, 
         allowNull: false 
      },
      medicamentosId: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
      },
      personalMedicoId: { 
        type: Sequelize.INTEGER, 
        allowNull: false 
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
    await queryInterface.dropTable('Recetas');
  }
};