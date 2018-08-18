var express = require("express");
var router = express.Router();

var productsController = require("../../controllers/productsController");

// Matches with /api/products
router.route("/")
  .get(productsController.getAllProducts)
  .post(productsController.createProduct);

// Matches with /api/products/:id
router.route("/:id")
  .put(productsController.updateProduct)
  .delete(productsController.deleteProduct);

module.exports = router;