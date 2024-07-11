"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Patient",
      [
        {
          id: 1,
          entidadesId: "1",
          financiadoresId: "1",
          personalMedicoId: "1",
          patologiasId: "1",
          usuarioID: "3",
          factorSanguineo: "B",
          Activo: True,
        },
        {
          id: 1,
          entidadesId: "2",
          financiadoresId: "2",
          personalMedicoId: "2",
          patologiasId: "2",
          usuarioID: "7",
          factorSanguineo: "B",
          Activo: True,
        },
        {
          id: 1,
          entidadesId: "3",
          financiadoresId: "3",
          personalMedicoId: "3",
          patologiasId: "3",
          usuarioID: "5",
          factorSanguineo: "B",
          Activo: True,
        },
        {
          id: 1,
          entidadesId: "1",
          financiadoresId: "1",
          personalMedicoId: "1",
          patologiasId: "1",
          usuarioID: "8",
          factorSanguineo: "B",
          Activo: True,
        },
        {
          id: 1,
          entidadesId: "2",
          financiadoresId: "2",
          personalMedicoId: "2",
          patologiasId: "2",
          usuarioID: "9",
          factorSanguineo: "B",
          Activo: True,
        },
        {
          id: 1,
          entidadesId: "3",
          financiadoresId: "3",
          personalMedicoId: "3",
          patologiasId: "3",
          usuarioID: "10",
          factorSanguineo: "B",
          Activo: True,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
