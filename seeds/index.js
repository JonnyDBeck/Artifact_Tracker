const seedFoodies = require('./foodie-seeds');
const seedResturants = require('./resturant-seeds');
const seedReviews = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedFoodies();
  console.log('\n----- FOODIES SEEDED -----\n');

  await seedResturants();
  console.log('\n----- RESTURANTS SEEDED -----\n');

  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');

  process.exit(0);
};

seedAll();