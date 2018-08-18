const router = require("express").Router();
const productsRoutes = require("./productsRoutes");

// Products Routes
router.use("/products", productsRoutes);

module.exports = router;