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
          address: "70 creekside road",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 23.34,
          lng: 80.52,
          name: "Good Vibrations",
          description: `pool.`,
          price: 9159,
        },
        {
          ownerId: 2,
          address: "9678 edgemont street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 24.34,
          lng: 81.52,
          name: "The Pearl on the Bay",
          description: `rt TVs.`,
          price: 7611,
        },
        {
          ownerId: 3,
          address: "975 oak meadow ave",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 25.34,
          lng: 82.52,
          name: "Elevated Perspective",
          description: ` be beaten. `,
          price: 8566,
        },
        {
          ownerId: 4,
          address: "47 newbridge ave",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 26.34,
          lng: 83.52,
          name: "New modern home, minutes from Siesta Key beach!",
          description: `ead a book. `,
          price: 7500,
        },
        {
          ownerId: 5,
          address: "23 east market street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 27.34,
          lng: 84.52,
          name: "Beachfront with Amazing Views!!",
          description: `one can retreat`,
          price: 6388,
        },
        {
          ownerId: 6,
          address: "897 wrangler street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 28.34,
          lng: 85.52,
          name: "Waterfront Siesta Key Villa",
          description: `property.`,
          price: 13300,
        },
        {
          ownerId: 7,
          address: "675 rockland drive",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 29.34,
          lng: 86.52,
          name: "Siesta Key Oceanfront Palace",
          description: ` bedrooms.`,
          price: 17500,
        },
        {
          ownerId: 8,
          address: "1025 south heritage court",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 30.34,
          lng: 87.52,
          name: "Luxory Modern Villa in Sarasota",
          description: `esta Beach.`,
          price: 7200,
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
        ownerId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
      },
      {}
    );
  },
};
