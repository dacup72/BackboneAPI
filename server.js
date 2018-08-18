const express = require("express");
const bodyParser = require("body-parser");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Add BosyParser middleware to express to better interpret json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

// Setting up handlebars middle ware with express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Pulling in and setting up routes / controller for express
var routes = require("./controllers/productsController.js");
app.use(routes);

// Starts our server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

