const { Review } = require('../models');

const reviewData = [
  {
    Rating: 3.5,
    Title: 'A Good, Quick Eat',
    Body: 'Something or Other',
    DatePosted: '2022-11-28 18:29:50',
    Imageurl: 'Nothing',
    Foodie_User: 'JohnDoe',
    Resturant_ID: 'ChIJra5JLuKrPogRKhNt6qoiWdE'
  },
  {
    Rating: 0.5,
    Title: 'Seeding Data Do not read',
    Body: 'I told you not to read >:(',
    DatePosted: '2022-11-28 00:00:01',
    Imageurl: 'Nothing',
    Foodie_User: 'AliceBob',
    Resturant_ID: 'ChIJwejCoX3wMIgR0FzkNYMYRIU'
  },
  {
    Rating: 4.5,
    Title: 'Expensive But WORTH IT!',
    Body: 'The prices are out there, but if you have some bucks to splurge, choose here!',
    DatePosted: '2022-11-27 12:50:18',
    Imageurl: 'Nothing',
    Foodie_User: 'JaneAppleseed',
    Resturant_ID: 'ChIJo9QCaqssDogRmmJ0MAf-aeE'
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;