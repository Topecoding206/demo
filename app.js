const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Set the view engine and views directory
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Sample data for items
const items = ["Tope", "Jumoke", "Ireoluwa"];

// Define a route to render the index.ejs view
app.get("/", (req, res) => {
  res.render("index", { items }); // Pass the items data to the view
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
