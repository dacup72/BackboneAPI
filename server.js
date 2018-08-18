const express = require("express");
const bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 8080;

// Add BosyParser middleware to express to better interpret json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes for express
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

