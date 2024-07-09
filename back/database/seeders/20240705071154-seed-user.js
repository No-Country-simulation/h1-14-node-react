"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          dni: 1,
          dniType: "libreta civica",
          firstName: "admin",
          lastName: "root",
          email: "admin.root@example.com",
          active: true,
          birthday: "2000-10-10",
          gender: "Male",
          password: "1234",
        },
        {
          dni: 2,
          dniType: "dni",
          firstName: "medico",
          lastName: "doctor",
          email: "medico.doctor@example.com",
          active: true,
          birthday: "2000-10-10",
          gender: "Male",
          password: "1234",
        },
        {
          dni: 3,
          dniType: "libreta de enrolamiento",
          firstName: "paciente",
          lastName: "receptor",
          email: "paciente.receptor@example.com",
          active: true,
          birthday: "2000-10-10",
          gender: "Male",
          password: "1234",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
