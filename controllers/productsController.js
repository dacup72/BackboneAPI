var db_products = require("../db/productsData");

module.exports = {
  getAllProducts: function(req, res) {
    res.send(db_products);
  },
  updateProduct: function(req, res) {
    
    db_products.forEach(function(product) {
      if(product.id === parseInt(req.params.id)) {
        product.price = req.body.value;
      };
    });
    res.send(db_products)
  },
  deleteProduct: function(req, res) {

  }
};