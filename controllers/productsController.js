var db_products = require("../db/productsData");

module.exports = {
  getAllProducts: function(req, res) {
    res.json(db_products);
  },
  updateProduct: function(req, res) {
    db_products.forEach(product => {
      product[req.params.id] ? product[req.params.q] = req.body.q : null;
    });
  },
  deleteProduct: function(req, res) {

  },
  createProduct: function(req, res) {

  }
};