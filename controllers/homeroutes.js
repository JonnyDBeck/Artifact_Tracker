const router = require('express').Router();

router.get('/', async (req, res) => { 

    res.render('homepage') })



router.get('/results', async (req, res) => { 
    console.log("params", req.query)

    const requestedLocation = req.query.location
    


    res.render('results') })

    router.get('/results', async (req, res) => { 
        console.log("params", req.query)
    
        try {
            const restData = await Resturant.findByPk(req.params.id, {
              where:
                {
                  city: req.query.city,
                  state: req.query.state
                },
            });
        
            const restaurant = restData.get({ plain: true });
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