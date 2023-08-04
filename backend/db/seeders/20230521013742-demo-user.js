"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Users";
    return queryInterface.bulkInsert(
      options,
      [
        {
          firstName: "John",
          lastName: "Smith",
          email: "johnsmith@user.io",
          username: "johnsmith",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "janedoe@user.io",
          username: "janedoe",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Bryan",
          lastName: "Hill",
          email: "bryanjohnson@user.io",
          username: "bryanhill",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Will",
          lastName: "Haney",
          email: "willhaney@user.io",
          username: "willhaney",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Trevor",
          lastName: "Shull",
          email: "trevorshull@user.io",
          username: "trevorshull",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Peyton",
          lastName: "Mohr",
          email: "peytonmohr@user.io",
          username: "peytonmohr",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Abby",
          lastName: "Herman",
          email: "abbyherman@user.io",
          username: "abbyherman",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Amy",
          lastName: "Kohler",
          email: "amykohler@user.io",
          username: "amykohler",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "Demo",
          lastName: "User",
          email: "demo-user@user.io",
          username: "demouser",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Users";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        username: {
          [Op.in]: [
            "johnsmith",
            "janedoe",
            "bryanjohnson",
            "willhaney",
            "trevorshull",
            "peytonmohr",
            "abbyherman",
            "amykohler",
          ],
        },
      },
      {}
    );
  },
};
