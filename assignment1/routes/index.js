var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Home',
    author: 'Karen' 
  });
});

/* GET About page. */
router.get('/about', function(req, res) { 
  res.render('about', { title: 'About Us', author: 'John'});
});

/* GET Contact page. */
router.get('/contact', function(req, res) { 
  res.render('contact', { title: 'Contact Us', author: 'Maddie' });
});

module.exports = router;
