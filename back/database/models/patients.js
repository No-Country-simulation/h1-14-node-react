'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patients', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      entidadesId: { type: DataTypes.INTEGER },
      financiadoresId: { type: DataTypes.INTEGER },
      personalMedicoId: { type: DataTypes.INTEGER },
      patologiasId: { type: DataTypes.INTEGER },
      usuarioID: { type: DataTypes.INTEGER },
      factorSanguineo: { type: DataTypes.INTEGER },
      Activo: { type: DataTypes.BOOLEAN },
    },
    {
      timestamps: true,
    },{
      sequelize,
      modelName: 'Patients',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patients');
  }
};