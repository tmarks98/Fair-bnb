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
          firstName: "john",
          lastName: "smith",
          email: "johnsmith@user.io",
          username: "johnsmith",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "jane",
          lastName: "doe",
          email: "janedoe@user.io",
          username: "janedoe",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "bryan",
          lastName: "hill",
          email: "bryanjohnson@user.io",
          username: "bryanhill",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "will",
          lastName: "haney",
          email: "willhaney@user.io",
          username: "willhaney",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "trevor",
          lastName: "shull",
          email: "trevorshull@user.io",
          username: "trevorshull",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "peyton",
          lastName: "mohr",
          email: "peytonmohr@user.io",
          username: "peytonmohr",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "abby",
          lastName: "herman",
          email: "abbyherman@user.io",
          username: "abbyherman",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          firstName: "amy",
          lastName: "kohler",
          email: "amykohler@user.io",
          username: "amykohler",
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
        username: { [Op.in]: ["johnsmith", "janedoe", "bryanjohnson", "willhaney", "trevorshull", "peytonmohr", "abbyherman", "amykohler"] },
      },
      {}
    );
  },
};
