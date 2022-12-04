const router = require('express').Router();
const { Foodie } = require('../../models');

// The `/api/users` endpoint

router.post('/login', async (req, res) => {
    try {
      const userData = await Foodie.findOne({ where: { Username: req.body.username } });
      console.log("userData: ", userData);
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
      console.log("password: ", validPassword);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        req.session.username = userData.Username;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      console.log("catch: ", err)
      res.status(400).json(err);
    }
  });

  module.exports = router;