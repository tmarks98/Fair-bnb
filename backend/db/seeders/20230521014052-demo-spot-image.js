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
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/5cdb2f32-e8bf-4f4e-aabe-1743761f7db6-step-inside-the-incredible-homes-of-the-worlds-billionaires-tyler-perry-2.jpg",
          preview: true,
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
        spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
      },
      {}
    );
  },
};
