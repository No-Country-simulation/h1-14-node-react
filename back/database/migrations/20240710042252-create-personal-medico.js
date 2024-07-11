'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PersonalMedicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      especialidadesId: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      usuariosId: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      numeroMatricula: {
        type: Sequelize.STRING, 
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
    await queryInterface.dropTable('PersonalMedicos');
  }
};