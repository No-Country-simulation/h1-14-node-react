'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tratamientos', {
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
      patologiasId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Patologias',
          key:"id"
        } 
      },
      pacientesId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'Pacientes',
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
    await queryInterface.dropTable('Tratamientos');
  }
};