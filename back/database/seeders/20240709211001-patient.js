"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Patient",
      [
        {
          id: 1,
          entidadesId: "",
          financiadoresId: "",
          personalMedicoId: "",
          patologiasId: "",
          usuarioID: "",
          factorSanguineo: "",
          Activo: "",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
