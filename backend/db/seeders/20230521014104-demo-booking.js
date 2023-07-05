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
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 1,
          userId: 2,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 1,
          userId: 3,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 1,
          userId: 4,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 2,
          userId: 2,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 2,
          userId: 3,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 2,
          userId: 4,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 2,
          userId: 1,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 3,
          userId: 3,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 3,
          userId: 4,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 3,
          userId: 1,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 3,
          userId: 2,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 4,
          userId: 4,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 4,
          userId: 3,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 4,
          userId: 2,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 4,
          userId: 1,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 5,
          userId: 5,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 5,
          userId: 6,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 5,
          userId: 7,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 5,
          userId: 8,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 6,
          userId: 8,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 6,
          userId: 5,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 6,
          userId: 6,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 6,
          userId: 7,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 7,
          userId: 7,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 7,
          userId: 8,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 7,
          userId: 5,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 7,
          userId: 6,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
        },
        {
          spotId: 8,
          userId: 6,
          startDate: "2024-08-01",
          endDate: "2024-08-04",
        },
        {
          spotId: 8,
          userId: 7,
          startDate: "2024-08-05",
          endDate: "2024-08-09",
        },
        {
          spotId: 8,
          userId: 8,
          startDate: "2024-08-11",
          endDate: "2024-08-15",
        },
        {
          spotId: 8,
          userId: 5,
          startDate: "2024-08-17",
          endDate: "2024-08-22",
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
        spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
      },
      {}
    );
  },
};
