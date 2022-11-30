const { Foodie } = require('../models');

const foodieData = [
  {
    Username: 'JohnDoe',
    Password: 'PasswordTOBEENCRYPTED',
  },
  {
    Username: 'FooBar',
    Password: 'PasswordTOBEENCRYPTED',
  },
  {
    Username: 'AliceBob',
    Password: 'PasswordTOBEENCRYPTED',
  },
  {
    Username: 'JaneAppleseed',
    Password: 'PasswordTOBEENCRYPTED',
  },
];

const seedFoodies = () => Foodie.bulkCreate(foodieData);

module.exports = seedFoodies;