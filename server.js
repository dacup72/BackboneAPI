const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Add BosyParser middleware to express to better interpret json data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Addes routes
app.use(routes);

// Starts our server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});

