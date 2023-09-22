const express = require("express");
const router = require("./route");
const { connectToMongoDB } = require("./dbconnection");
const session = require("express-session");
const app = express();

require("dotenv").config();
const url =
  process.env.mongoDB_production || "mongodb://127.0.0.1:27017/test_url";
const port = process.env.PORT || 3000;

// connect to db
connectToMongoDB(url, {
  useNewUrlParser: true,
  useUnitfiedTopology: true,
}).then(() => {
  console.log(
    `database connected in ${
      process.env.mongoDB_production ? "production" : "development"
    }`
  );
});
// Set the view engine and views directory
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "secret store",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, //1 week
      secure: true,
    },
  })
);
// Define a route to render the index.ejs view
app.use("/", router);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
