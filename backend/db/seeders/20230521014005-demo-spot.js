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
          description: `Raise a toast to champagne wishes and caviar dreams at this secluded luxury retreat on the shores of Sarasota Bay. Enter a timeless realm of dreamy sunsets. Magnificent Mediterranean style five-bedroom, four-bath estate (sleeps 10). Tucked away, yet incredibly close to numerous world-famous powdery white sand beaches, the cultural capital of Southwest Florida with theaters, museums, world-class restaurants, and entertainment. Let the stress melt away as you relax in the lagoon-style saltwater pool amongst tropical landscaped grounds with long-range views of the calming water. Private dock and fishing pier. The home offers eclectic charm with all the modern upgrades for those who demand excellence. Spacious rooms are carefully furnished with balconies and plenty of views of the Bay. Private den/office for remote work or quiet retreat. Memorable home away from home that will create memories that last a lifetime. **Pets are welcome! If applicable, a $250.00 non-refundable pet fee (per pet) will be applied after booking.**`,
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
          description: `Welcome to The Pearl on the Bay, a breathtaking waterfront property that promises an unparalleled vacation experience. Nestled just off Siesta Key, this exquisite home offers stunning water views and is situated in the prestigious San Remo neighborhood. Prepare to be captivated by the sheer beauty and tranquility that awaits you. Inside, you'll find a thoughtfully designed and fully equipped home. Stay connected with free WiFi and enjoy entertainment with five HD smart TVs. The kitchen is a chef's dream, featuring top-of-the-line Wolf and Subzero appliances. Additionally, a regular and Keurig coffee maker, dishwasher, and kitchen essentials are provided for your convenience. This remarkable property features four bedrooms, each designed to provide ultimate comfort and privacy. All four bedrooms are master bedrooms, ensuring a restful night's sleep. With three king beds and two queen beds, accommodating a total of 10 guests, you'll find ample space and luxury. Linens are provided for your convenience, allowing you to relax and settle in effortlessly.`,
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
          description: `This Nearly Beachfront, Siesta Key luxury rental property features views of Siesta Key Beach and the Gulf of Mexico from Multiple Levels and the Roof Top Deck. This Siesta Key luxury rental is just steps to Siesta Key Beach and about a 3-minute walk to Siesta Key Village. This luxury vacation rental on Siesta Key also has a trolley stop nearby as well for easy and free transportation around the Key. The location simply cannot be beaten. The home offers approximately 3,900 square feet of interior living space and an additional 2,800 square feet of outdoor living space split up between multiple Covered Patios, Balconies, Entertainment Spaces, and of course the Pool. On the exterior of the home, you'll find a pool area that features a covered patio, open air patio with lounge chairs, and a private heated pool that includes a waterslide, two sun-shelf splash areas, a 6-person spa, and two water curtain features. With all the outdoor options via the pool area, multiple balconies, and the roof top deck at this Siesta Key rental, you'll be able to suntan, lounge, and enjoy the Florida weather all day and night.`,
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
          description: `Beautiful, luxury brand new construction modern energy efficient home located 10 minutes from Siesta Key Beach in a quiet and residential neighborhood that is close to shopping, dining and Sarasota Downtown. This large, two-story house with a luxury roof terrace and patio will not disappoint you. The highlights for this amazing design is the balcony on the second floor, luxury opened terrace ideal for entertaining or enjoying a moment of silence to read a book. House offers fully equipped kitchen with 4 island chairs and dining room table with 6 comfortable sittings. 2 Master en-suites with a King size beds and walk in closets, 1 bedroom with Queen size bed and additional bedroom with 2 Day beds with trundles. Upstairs convertible sofa also sleeps 2 persons. House provides 3 smart TV's (Downstairs Master bedroom, living room and upstairs living room)`,
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
          description: `This all NEW hip, luxe Beachfront Bungalow is the perfect choice to soak up the Gulf of Mexico! Located in the heart of Anna Maria directly on the beach with plenty of windows and panoramic views of the sugary white sand beaches of Anna Maria, High Tide will have you feeling the island-living vibe the moment you arrive. With 3 bedrooms, 3 bathrooms, a well-appointed kitchen and spacious outdoor deck everyone can retreat. Take a sunset stroll to explore the laid-back charm of the island or enjoy the sunset from the comfort of your deck. Pine Avenue, is only a block away where you will find fun shopping and the dining district of Anna Maria. It features amazing boutique shops like Pink and Navy, fantastic waterfront restaurants with views like The Waterfront and The Sandbar, dessert shops like Anna Maria Island Creamery and Dips. Don't forget about Rod N Reel Pier, where you can find some great fresh seafood, cold beer, and some great fishing. You can also hop on the Free Trolley that will take you anywhere you need to go very easily. There is so much to do and so much to see! We are happy to help give you some local recommendations.`,
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
          description: `This is one of very few direct beachfront properties with your own private beach access and gorgeous Western sunsets. You can fish right off the sand at the back of the home. The pool is unmatched with a family fun water slide, hot tub and grotto. It lights up in the evening and makes for the perfect gathering. Each level of the home opens to outdoor living areas with terraces. Recently renovated and professionally-decorated, the palace offers luxury living spaces featuring 5 bedrooms, each has its own bathroom for plenty of privacy. There are an additional 4 half baths. One of the bedrooms has its own separate entrance and is completely separate from the rest of the home for complete privacy and first row seats to the Gulf views. The bright open floor plan on second floor features a game room with pool table and foosball table with eat-in island, dining area overlooking the pool and beach and bar with with lounge seating in addition to bedrooms. The top level features a rooftop patio with wet bar and additional outdoor terraced outdoor living area overlooking the pool and beach. A three stop elevator allows for easy access to all areas. The theater room has comfortable rows of seating and features gothic accent doors. The outdoor kitchen on the ground level is perfect for grilling and enjoying perfect weather by the pool. A notable feature is the walk in wine cellar/closet for the most avid wine aficionados. For the fitness guru, there is also a gym room available to get in the workout you crave.`,
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
          description: `An Architectural gem, this custom designed home blends seamlessly with the natural environment. The house wraps around a 60-foot heated saltwater lap pool with spa encased in a screened-in courtyard. A detached (yet connected) wing currently being used as a fully equipped gym. This one-of-a kind residence is nestled on a half- acre of woods located in Sapphire Shores just a few blocks from the Ringling Museum, 8 minutes from Downtown, 15 minutes from Lido Beach, and 20 minutes from Siesta Beach. Other features include a sleek, oversized natural gas heated fireplace in the living room, loft areas in both the guest bedroom and studio spaces, and a 2 car garage. This one-of-a kind residence is nestled on a half- acre of woods which includes 14 varieties of bamboo, providing privacy as well as lovely natural landscaping.`,
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
