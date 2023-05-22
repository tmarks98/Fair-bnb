"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "ReviewImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          reviewId: 1,
          url: "https://www.tinyurl.com/horse",
        },
        {
          reviewId: 2,
          url: "https://www.tinyurl.com/cow",
        },
        {
          reviewId: 3,
          url: "https://www.tinyurl.com/chicken",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "ReviewImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        url: {
          [Op.in]: [
            "https://www.tinyurl.com/horse",
            "https://www.tinyurl.com/cow",
            "https://www.tinyurl.com/chicken",
          ],
        },
      },
      {}
    );
  },
};
