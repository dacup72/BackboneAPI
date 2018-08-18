const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// redirects root route to /api/products on page load
router.get('/', function(req,res) {
  res.redirect('/api/products');
});

module.exports = router;