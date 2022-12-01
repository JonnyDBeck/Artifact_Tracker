const router = require('express').Router();

router.get('/', async (req, res) => { 

    res.render('homepage') })

router.get('/results', async (req, res) => { 
    console.log("params", req.query)

    const requestedLocation = req.query.location    

    res.render('results') })

router.get('/post', async (req, res) => { 
    console.log("params", req.query)
    
    const requestedLocation = req.query.location    
    
    res.render('post') })
    
module.exports = router;