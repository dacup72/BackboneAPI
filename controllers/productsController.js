var express = require("express");

var router = express.Router();
var products = require("../db/productsData.js");

router.get('/', function(req,res) {
  res.redirect('/products');
});

router.get('/products', function(req, res) {
  res.render('index', {products});
});

router.post('/products', function(req, res) {

});

router.put('/products', function(req, res) {

});

router.delete('/products', function(req, res) {

});

module.exports = router;