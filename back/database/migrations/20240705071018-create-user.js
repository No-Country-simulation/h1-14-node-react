'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.INTEGER
      },
      dniType: {
        type: Sequelize.ENUM(
          "dni", "libreta de enrolamiento", "libreta civica"
        )
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      },birthday: {
        type: Sequelize.DATE
      },gender: {
        type: Sequelize.STRING
      },password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Users');
  }
};