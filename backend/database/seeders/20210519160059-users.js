"use strict";
const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "doe@gmail.com",
          password: bcrypt.hashSync("password", 10),
          gender: "male",
        },
        {
          firstName: "John",
          lastName: "Sam",
          email: "sam@gmail.com",
          password: bcrypt.hashSync("password", 10),
          gender: "male",
        },
        {
          firstName: "John",
          lastName: "Smirk",
          email: "smirk@gmail.com",
          password: bcrypt.hashSync("password", 10),
          gender: "female",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
