const router = require('express').Router();
const { Resturant, Review } = require('../../models');

// The `/api/foodies` endpoint

router.get('/', async (req, res) => {
  // find all Resturants
  // included its associated Review
  try {
    const resturantData = await Resturant.findAll({
      include: [{ model: Review}]
  });
    res.status(200).json(resturantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:APIID', async (req, res) => {
  // find one Resturant by its `APIID` value
  // included its associated Review
  try {
    const resturantData = await Resturant.findByPk(req.params.APIID, {
      include: [{ model: Review }],
    });

    if (!resturantData) {
      res.status(404).json({ message: 'No Resturant found with that id!' });
      return;
    }

    res.status(200).json(resturantData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "Name": "Rossilli's Restaurant",
        "State": "ohio",
        "City": "findlay",
        "APIID": "ChIJuYHCRpGrPogRpUfaZUZ2A48"
    }
  */
      try {
        const resturantData = await Resturant.create(req.body);
        res.status(200).json(resturantData);
      } catch (err) {
        res.status(400).json(err);
      }    
});

router.delete('/:APIID', async (req, res) => {
  // delete a Foodie by its `APIID` value
  try {
    const resturantData = await Resturant.destroy({
      where: {
        Username: req.params.APIID,
      },
    });

    if (!resturantData) {
      res.status(404).json({ message: 'No Resturant found with that id!' });
      return;
    }

    res.status(200).json(resturantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;