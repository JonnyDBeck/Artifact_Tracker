const router = require('express').Router();
const { Resturant } = require('../models');

router.get('/', async (req, res) => { 

    res.render('homepage') })

router.get('/about', async (req, res) => { 

    res.render('about') })

router.get('/login', async (req, res) => { 

    res.render('login') })

router.get('/results', async (req, res) => { 
    console.log("params", req.query)
    try {
        const requestedLocation = req.query.location 
        const searchData = await Resturant.findByPk(requestedLocation);
    
        const restaurant = searchData.get({ plain: true });
    
        res.render('results', {
          ...restaurant,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }   

    res.render('results') })

router.get('/post', async (req, res) => { 
    console.log("params", req.query)
    
    const requestedLocation = req.query.location
    
    res.render('post') })
    
module.exports = router;