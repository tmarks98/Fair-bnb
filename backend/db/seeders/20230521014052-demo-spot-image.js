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
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659305312496527442/original/fad75eb4-53d2-47f6-93aa-4fc95f6c58d1.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659305312496527442/original/bca14fd5-5a47-4e3e-ba4e-b6d0fd02f1fd.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659305312496527442/original/8337ed48-e6e4-4dd1-926b-eca895aa5794.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659305312496527442/original/d6ddc046-2ed1-4bc3-a731-c875ee249fbd.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 1,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-659305312496527442/original/3e7e828a-9422-4993-8bcb-1d2c45c126ed.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-812904168272334527/original/7eafef99-80ff-4b40-95bc-327a431f0081.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-812904168272334527/original/ef0d5025-8b22-4fd0-b811-cd9e1edbc782.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-812904168272334527/original/43a88313-e5ea-4a3f-946d-1f20836684b8.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-812904168272334527/original/89160e27-a9b4-4bbf-84bb-49b643c3493c.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 2,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-812904168272334527/original/827a4570-03d3-4a9d-b93f-68e3f992cd6e.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-899161152882007059/original/da15d886-6801-4d04-906c-33af12d8af4e.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-899161152882007059/original/4f36ee91-32d1-4164-8004-4d886d6b741a.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-899161152882007059/original/7128bea7-5994-4e6d-8dda-33f2b73427f4.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-899161152882007059/original/90e2326e-399c-4c26-9233-d41ba5e64d8a.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 3,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-899161152882007059/original/99178733-a4e0-4a00-98fc-345307468c6e.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-861525523147442553/original/40e40e4d-e110-48d2-a20c-392841b8d73c.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-861525523147442553/original/e9ee1189-7f73-482d-a2f9-a4a25bf839d3.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-861525523147442553/original/7e24a042-7d8f-42e5-b78e-b2f6663e8dd6.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-861525523147442553/original/de3c1b7f-5d33-43ef-9864-e63d049c820a.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 4,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-861525523147442553/original/82daf078-d1a2-4f93-a95c-d5ef44a69395.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52496384/original/f8485e25-8402-4d28-9416-6a6b3cca6358.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52496384/original/e9fae2c8-e8c9-4fbc-bc5c-cee9be1aa3c0.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52496384/original/754ec791-8760-4413-b548-7a9a87ed03cf.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52496384/original/f2320ea1-61dc-4f0e-9385-a630fe16d77d.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 5,
          url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-52496384/original/0f4d791e-13ba-48e9-8e6a-29c286afa3cd.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54389655/original/4b437ca2-77a9-449e-86eb-623e17fed630.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54389655/original/969d4525-47f7-42d8-9d48-e984296140df.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54389655/original/2876a173-5c1a-4f97-9a1c-2224e85aae41.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54389655/original/562e7c6f-ad65-44ff-8d69-3f015d36245c.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 6,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54389655/original/9927f448-0f0b-4ac1-935c-d60d8f46f312.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/b51c48b4-3a40-43b2-ad97-887cec1a5bf3.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/c031f005-4ee9-4a49-9743-e3cbe3e7db37.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/845d6e0e-b6b0-431e-b217-2d918ef6f256.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/6acb9db3-24ae-4763-8ebd-d1de0cf64f72.jpg?im_w=1200",
          preview: true,
        },
        {
          spotId: 7,
          url: "https://a0.muscache.com/im/pictures/311a6c59-4771-45c7-8e3b-5db9a8671abc.jpg?im_w=720",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54194733/original/a3a42b58-3cdf-43fd-bae6-d9f354556e1e.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54194733/original/09e00071-9806-45d8-9d74-dec078b98fab.jpeg?im_w=720",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54194733/original/91c2b9f2-ab37-4501-994c-c20af4d713eb.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54194733/original/15950226-9fbc-4b89-b116-444c8fa92468.jpeg?im_w=1200",
          preview: true,
        },
        {
          spotId: 8,
          url: "https://a0.muscache.com/im/pictures/miso/Hosting-54194733/original/cbc75ec8-dfb9-445a-b3f8-afec60a40a3e.jpeg?im_w=1200",
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
