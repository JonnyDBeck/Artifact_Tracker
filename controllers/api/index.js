const router = require('express').Router();
const foodieRoutes = require('./foodie-routes');
const resturantRoutes = require('./resturant-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes')

router.use('/foodies', foodieRoutes);
router.use('/resturants', resturantRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;