const router = require('express').Router();
const { Foodie, Review } = require('../../models');

// The `/api/foodies` endpoint

router.get('/', async (req, res) => {
  // find all foodies
  // included its associated Review
  try {
    const foodieData = await Foodie.findAll({
      include: [{ model: Review}]
  });
    res.status(200).json(foodieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:Username', async (req, res) => {
  // find one foodie by its `Username` value
  // included its associated Review
  try {
    const foodieData = await Foodie.findByPk(req.params.Username, {
      include: [{ model: Review }],
    });

    if (!foodieData) {
      res.status(404).json({ message: 'No foodie found with that name!' });
      return;
    }

    res.status(200).json(foodieData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "Username": "JohnDoe",
        "Password": "PasswordTOBEENCRYPTED",
    }
  */
      try {
        const foodieData = await Foodie.create(req.body);
        res.status(200).json(foodieData);
      } catch (err) {
        res.status(400).json(err);
      }    
});

router.delete('/:Username', async (req, res) => {
  // delete a Foodie by its `Username` value
  try {
    const foodieData = await Foodie.destroy({
      where: {
        Username: req.params.Username,
      },
    });

    if (!foodieData) {
      res.status(404).json({ message: 'No foodie found with that name!' });
      return;
    }

    res.status(200).json(foodieData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;