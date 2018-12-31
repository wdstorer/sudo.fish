// require express
var express = require('express');

var router = express.Router();
var host = process.env.HOSTNAME;

module.exports = router;

// route for the home page
router.get('/', function(req, res) {
  res.send('Welcome to sudo.fish! | Running on: ' + host);
});

// route for our about page
router.get('/about', function(req,res) {
  res.send('i am the about page!');
});

router.get('/contact');
router.post('/contact');
