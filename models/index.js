// import models
const Foodie = require('./Foodie');
const Resturant = require('./Resturant');
const Review = require('./Review');

// Review belongs to user
Review.belongsTo(Foodie, {
    foreignKey: 'Foodie_User',
    onDelete: 'CASCADE'
})
  
// Profile has many Reviews
Foodie.hasMany(Review, {
    foreignKey: 'Foodie_User',
})

// Review belongs to user
Review.belongsTo(Resturant, {
    foreignKey: 'Resturant_ID',
    onDelete: 'CASCADE'
})
  
// Resturant has many Reviews
Resturant.hasMany(Review, {
    foreignKey: 'Resturant_ID',
})

module.exports = {
    Foodie,
    Resturant,
    Review,
  };