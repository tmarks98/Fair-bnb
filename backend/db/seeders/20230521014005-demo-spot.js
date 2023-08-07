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
          description: `Raise a toast to champagne wishes and caviar dreams at this secluded luxury retreat on the shores of Sarasota Bay. Enter a timeless realm of dreamy sunsets. Magnificent Mediterranean style five-bedroom, four-bath estate . Tucked away, yet incredibly close to numerous world-famous powdery white sand beaches, the cultural capital of Southwest Florida with theaters, museums, world-class restaurants, and entertainment. Let the stress melt away as you relax in the lagoon-style saltwater pool.`,
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
          description: `Welcome to The Pearl on the Bay, a breathtaking waterfront property that promises an unparalleled vacation experience. Nestled just off Siesta Key, this exquisite home offers stunning water views and is situated in the prestigious San Remo neighborhood. Prepare to be captivated by the sheer beauty and tranquility that awaits you. Inside, you'll find a thoughtfully designed and fully equipped home. Stay connected with free WiFi and enjoy entertainment with five HD smart TVs.`,
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
          description: `This Nearly Beachfront, Siesta Key luxury rental property features views of Siesta Key Beach and the Gulf of Mexico from Multiple Levels and the Roof Top Deck. This Siesta Key luxury rental is just steps to Siesta Key Beach and about a 3-minute walk to Siesta Key Village. This luxury vacation rental on Siesta Key also has a trolley stop nearby as well for easy and free transportation around the Key. The location simply cannot be beaten. `,
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
          description: `Beautiful, luxury brand new construction modern energy efficient home located 10 minutes from Siesta Key Beach in a quiet and residential neighborhood that is close to shopping, dining and Sarasota Downtown. This large, two-story house with a luxury roof terrace and patio will not disappoint you. The highlights for this amazing design is the balcony on the second floor, luxury opened terrace ideal for entertaining or enjoying a moment of silence to read a book. `,
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
          description: `This all NEW hip, luxe Beachfront Bungalow is the perfect choice to soak up the Gulf of Mexico! Located in the heart of Anna Maria directly on the beach with plenty of windows and panoramic views of the sugary white sand beaches of Anna Maria, High Tide will have you feeling the island-living vibe the moment you arrive. With 3 bedrooms, 3 bathrooms, a well-appointed kitchen and spacious outdoor deck everyone can retreat`,
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
          description: `Casa Flamingo is like staying at your own private resort! This extraordinary residence is situated on nearly an acre of waterfront tropical paradise, on the coveted north end of Siesta Key. It is less than 100 yards from the azure waters of Sarasota Bay & the Gulf of Mexico. The unbelievable indoor/outdoor pool floor is the heart of this estate. Along with the main open living area, is the variety of sleeping quarters, scattered throughout the property.`,
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
          description: `This is one of very few direct beachfront properties with your own private beach access and gorgeous Western sunsets. You can fish right off the sand at the back of the home. The pool is unmatched with a family fun water slide, hot tub and grotto. It lights up in the evening and makes for the perfect gathering. Each level of the home opens to outdoor living areas with terraces. Recently renovated and professionally-decorated, the palace offers luxury living spaces featuring 5 bedrooms.`,
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
          description: `An Architectural gem, this custom designed home blends seamlessly with the natural environment. The house wraps around a 60-foot heated saltwater lap pool with spa encased in a screened-in courtyard. A detached (yet connected) wing currently being used as a fully equipped gym. This one-of-a kind residence is nestled on a half- acre of woods located in Sapphire Shores just a few blocks from the Ringling Museum, 8 minutes from Downtown, and 20 minutes from Siesta Beach.`,
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
