const router = require('express').Router();
const foodieRoutes = require('./foodie-routes');
const resturantRoutes = require('./resturant-routes');
const reviewRoutes = require('./review-routes');

router.use('/foodies', foodieRoutes);
router.use('/resturants', resturantRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;