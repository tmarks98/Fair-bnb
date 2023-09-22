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
          lat: 23.341274,
          lng: 80.528267,
          name: "Good Vibrations",
          description: `ool.`,
          price: 9159,
        },
        {
          ownerId: 2,
          address: "9678 edgemont street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 24.341274,
          lng: 81.528267,
          name: "The Pearl on the Bay",
          description: `s.`,
          price: 7611,
        },
        {
          ownerId: 3,
          address: "975 oak meadow ave",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 25.341274,
          lng: 82.528267,
          name: "Elevated Perspective",
          description: `aten. `,
          price: 8566,
        },
        {
          ownerId: 4,
          address: "47 newbridge ave",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 26.341274,
          lng: 83.528267,
          name: "New modern home, minutes from Siesta Key beach!",
          description: `ook. `,
          price: 7500,
        },
        {
          ownerId: 5,
          address: "23 east market street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 27.341274,
          lng: 84.528267,
          name: "Beachfront with Amazing Views!!",
          description: `reat`,
          price: 6388,
        },
        {
          ownerId: 6,
          address: "897 wrangler street",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 28.341274,
          lng: 85.528267,
          name: "Waterfront Siesta Key Villa",
          description: `perty.`,
          price: 13300,
        },
        {
          ownerId: 7,
          address: "675 rockland drive",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 29.341274,
          lng: 86.528267,
          name: "Siesta Key Oceanfront Palace",
          description: `rooms.`,
          price: 17500,
        },
        {
          ownerId: 8,
          address: "1025 south heritage court",
          city: "Sarasota",
          state: "FL",
          country: "USA",
          lat: 30.341274,
          lng: 87.528267,
          name: "Luxory Modern Villa in Sarasota",
          description: `iesta Beach.`,
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
