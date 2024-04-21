"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "luiz@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
