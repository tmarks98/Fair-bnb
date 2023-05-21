"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 1,
          startDate: new Date("2024-02-01"),
          endDate: new Date("2024-02-04"),
        },
        {
          spotId: 2,
          userId: 2,
          startDate: new Date("2024-03-01"),
          endDate: new Date("2024-03-04"),
        },
        {
          spotId: 3,
          userId: 3,
          startDate: new Date("2024-04-01"),
          endDate: new Date("2024-04-04"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Bookings";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        startDate: { [Op.in]: ["2024-02-01", "2024-03-01", "2024-04-01"] },
      },
      {}
    );
  },
};
