'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medicamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING, 
        allowNull: false
      }, 
      patologiasId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patologias',
          key:"id"
        }
      },
      tratamientosId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tratamientos',
          key:"id"
        }
      },
      farmaciasId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Farmacias',
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
    await queryInterface.dropTable('Medicamentos');
  }
};