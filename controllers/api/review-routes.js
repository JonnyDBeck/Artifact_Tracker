const router = require('express').Router();
const { Foodie, Review, Resturant } = require('../../models');

// The `/api/reviews` endpoint

router.get('/', async (req, res) => {
  // find all reviews
  // included its associated Resturant and Foodie
  try {
    const reviewData = await Review.findAll({
      include: [{ model: Foodie}, { model: Resturant}],
  });
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:RevID', async (req, res) => {
  // find one Reviews by its `Username` value
  // included its associated Resturant and Foodie
  try {
    const reviewData = await Review.findByPk(req.params.RevID, {
      include: [{ model: Foodie}, { model: Resturant}],
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No Review found with that id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
    /* req.body should look like this...
    {
        "Rating": "3.5",
        "Title": "A Good, Quick Eat",
        "Body": "Something or Other",
        "Imageurl": "Nothing",
        "Foodie_User": "JohnDoe",
        "Resturant_ID": "ChIJra5JLuKrPogRKhNt6qoiWdE"
    }
  */
      try {
        console.log("body: ", req.body)
        const reviewData = await Review.create(req.body);
        res.status(200).json(reviewData);
      } catch (err) {
        console.log("error: ", err)
        res.status(400).json(err);
      }    
});

router.delete('/:RevID', async (req, res) => {
  // delete a Review by its `Username` value
  try {
    const reviewData = await Review.destroy({
      where: {
        RevID: req.params.RevID,
      },
    });

    if (!reviewData) {
      res.status(404).json({ message: 'No review found with that id!' });
      return;
    }

    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;