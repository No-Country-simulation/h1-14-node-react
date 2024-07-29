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
         allowNull: false,
         references: {
          model: 'Tratamientos',
          key:"id"
        } 
      },
      medicamentosId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Medicamentos',
          key:"id"
        } 
      },
      personalMedicoId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'PersonalMedico',
          key:"id"
        } 
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