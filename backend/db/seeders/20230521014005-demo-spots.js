"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(
      options,
      [
        {
          ownerId: 1,
          address: "123 apple st",
          city: "Chesapeak",
          state: "VA",
          country: "USA",
          lat: 36.6424,
          lng: -16.3412,
          name: "Floating hotel",
          description: "A hotel surrounded by water",
          price: 1000,
        },
        {
          ownerId: 2,
          address: "123 orange st",
          city: "Atlanta",
          state: "GA",
          country: "USA",
          lat: 36.41,
          lng: -73.3657,
          name: "The spot",
          description: "Big burger place",
          price: 5000,
        },
        {
          ownerId: 3,
          address: "123 pear st",
          city: "Miami",
          state: "FL",
          country: "USA",
          lat: 36.4723,
          lng: 89.4318,
          name: "The cave",
          description: "Biggest club around",
          price: 500,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Spots";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        ownerId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};
