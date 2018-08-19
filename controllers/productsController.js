var db_products = require("../db/productsData");

module.exports = {
  
  // Send entire products database to the front end
  getAllProducts: function (req, res) {
    res.send(db_products);
  },

  // Update product price in database by id
  updateProduct: function (req, res) {
    // Loop through each product in database and up date price on product with the matching id
    db_products.forEach(function (product) {
      if (product.id === parseInt(req.params.id)) {
        product.price = req.body.value;
      };
    });

    res.send(db_products)
  },

  // Delete product in database by id
  deleteProduct: function (req, res) {
    // Loop through each product in database and delete product with the matching id
    db_products.forEach(function(product, id) {
      if(product.id === parseInt(req.params.id)) {
        db_products.splice(id, 1);
      };
    });

    res.send(db_products);
  }
};