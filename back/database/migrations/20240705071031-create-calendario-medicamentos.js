'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CalendarioMedicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      time: {
        type: Sequelize.STRING
      },
      description: { 
        type: Sequelize.STRING, 
        allowNull: false 
      },
      medicamentosId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Medicamentos',
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CalendarioMedicamentos');
  }
};