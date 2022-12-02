const { Resturant, Review } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('homepage');

});



router.get('/results', async (req, res) => {
    console.log("params", req.query)

    try {
        const restData = await Resturant.findAll({
            where:
            {
                City: req.query.city,
                State: req.query.state
            },
        });

        const restaurant = restData.map(Restaurant => Restaurant.get({ plain: true }));
        console.log(restaurant);

        res.render('results'
            // , {
            //   ...restaurant,
            //   logged_in: req.session.logged_in
            // }
        );
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;