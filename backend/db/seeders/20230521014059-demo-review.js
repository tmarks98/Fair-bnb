"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 5,
          review: "The house was the perfect place for our family! We will be back!",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 6,
          review: "Great location. Beautiful place for the sunset.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 7,
          review: "Beautiful house , gorgeous location. Definitely going back.",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 8,
          review: "Perfect location! Super comfortable and gorgeous view! Really enjoyed our stay!",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 8,
          review: "Beautiful house just steps from the beach! Perfect for my toddlers who are back and forth from the beach all day. We had a wonderful weekend, even with the rain!!",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 5,
          review: "This was a great location for the beach and walking to everything. We loved the house and had a great time!",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 6,
          review: "Our family LOVED our stay, the host was extremely responsive and came out a twice to fix the Wi-Fi for us!! The place was absolutely spotless and really a dream come true",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 7,
          review: "This is the best home we have EVER stayed in. Lisa has thought of everything, amenities are perfect; pool, pool table, electric bikes, golf cart, kayaks, etc. If you are looking for the perfect home to enjoy the vacation of a lifetime, this is it! The hose was very responsive, friendly and helpful.",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 7,
          review: "This place is absolutely amazing! Words can not describe this amazing house and the photos do not do it justice.",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 8,
          review: "Amazing place and amazing location. The host was really helpful with restaurant recommendations and flexible check-in as well",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 5,
          review: "Amazing place, hosted exceptionally well… perfect weekend. Will definitely be back in the near future.",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 6,
          review: "Amazing space with plenty of space for my whole family. We especially liked the chef they recommended.",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 6,
          review: "A beautiful house with the best pool and an unbelievable view. The rooms are super spacious, clean and everything is well stocked.",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 7,
          review: "This house is beyond gorgeous and it truly felt like our home! We will be back!",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 8,
          review: "The property and house were gorgeous. Such a great setting, especially for sunsets.",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 5,
          review: "My husband and I enjoyed our stay! The house was clean and well appointed and our hosts were very responsive to any of our needs.",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 1,
          review: "The place is particularly well equipped for anyone who wants to work out.",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 2,
          review: "Great experience! Everything we were hoping for!",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 3,
          review: "Very beautiful home and the owners were quick and easy to work with!",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 4,
          review: "Great place and great communication! Highly recommend!",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 4,
          review: "We had a great stay at this lovely and peaceful home. Location was perfect for our needs. The home had everything we could have hoped for.",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 1,
          review: "We had a wonderful time at this house! Very clean and absolutely beautiful! We would stay here again! 10/10!",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 2,
          review: "Absolutely amazing! We fell in love with this hidden gem. Everything was so perfect and there's a certain sense of peace here that we look forward coming back to...",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 3,
          review: "Highly Recommend this Villa!",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 3,
          review: "The architecture and layout of this home is one of a kind. We enjoyed our stay very much.",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 4,
          review: "The house was absolutely perfect from the comfy beds, various appliances and plenty of amenities. We enjoyed our stay very much and can’t wait to return. Highly recommend!",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 1,
          review: "We loved this home. It is very private and well-appointed. The hosts pay attention to the details and are very attentive when you have questions.",
          stars: 5,
        },
        {
          spotId: 7,
          userId: 2,
          review: "The home is beautiful. The hosts are always available and the house manager is fantastic.",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 2,
          review: "The home was very clean and we had top notch amenities including a stocked fridge upon arrival, a welcome basket, and a great coffee bar for us to enjoy.",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 3,
          review: "Our stay was amazing! For the chilly evenings the gas fireplace and spa are just what you need.",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 4,
          review: "The home has so many amenities and every area is decorated perfectly. The beds are also very comfortable. Host is wonderful and responds promptly to any questions. 10/10 would recommend",
          stars: 5,
        },
        {
          spotId: 8,
          userId: 1,
          review: "Awful smell in the air",
          stars: 5,
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      options,
      {
        userId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8] },
      },
      {}
    );
  },
};
