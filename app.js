const express = require("express");
const { route } = require("./route");
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Define a route to render the index.ejs view
app.use("/", route);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
