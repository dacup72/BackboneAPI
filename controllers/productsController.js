var db_products = require("../db/productsData");

module.exports = {
  getAllProducts: function(req, res) {
    res.send(db_products);
  },
  updateProduct: function(req, res) {
    
  },
  deleteProduct: function(req, res) {

  },
  createProduct: function(req, res) {

  }
};