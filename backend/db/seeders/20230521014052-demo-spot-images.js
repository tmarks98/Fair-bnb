"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          url: "https://www.tinyurl.com/dog",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://www.tinyurl.com/cat",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://www.tinyurl.com/rabbit",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://www.tinyurl.com/home",
          preview: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "SpotImages";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        spotId: { [Op.in]: [1, 2, 3] },
      },
      {}
    );
  },
};
