'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      entidadesId: { 
        type: Sequelize.INTEGER 
      },
      financiadoresId: { 
        type: Sequelize.INTEGER 
      },
      personalMedicoId: { 
        type: Sequelize.INTEGER 
      },
      patologiasId: { 
        type: Sequelize.INTEGER 
      },
      usuarioID: { 
        type: Sequelize.INTEGER 
      },
      factorSanguineo: { 
        type: Sequelize.INTEGER 
      },
      Activo: { 
        type: Sequelize.BOOLEAN 
      },
      createdAt: {
         allowNull: false,
         type: Sequelize.DATE,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
         allowNull: false,
         type: Sequelize.DATE,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};