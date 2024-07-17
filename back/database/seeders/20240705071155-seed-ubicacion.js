"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ubicaciones",
      [
        {
          usuariosId: "1",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "2",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "3",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "4",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "5",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "6",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "7",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "8",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "9",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
        {
          usuariosId: "10",
          pais: "Argentina",
          provincias: "Buenos Aires",
          localidad: "Buenos Aires",
          direccion: "Calle 6, casa 45",
          active: true,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Ubicaciones', null, {});
  },
};
