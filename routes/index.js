var express = require('express');
var router = express.Router();

// var mathController = require('../controllers/math_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { errors: [] });
});

/* GET /sumas */
router.get('/sumas', function(req, res) {
  res.render('sumas', {errors: []});
});

/* GET /restas */
router.get('/restas', function(req, res) {
  res.render('restas', {errors: []});
});

module.exports = router;