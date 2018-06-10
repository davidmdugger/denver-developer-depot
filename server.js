const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport");

const port = 8000;

const users = require("./routes/api/users"),
  profile = require("./routes/api/profile"),
  posts = require("./routes/api/posts");

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// CONNECT TO MONGODB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB is connected"))
  .catch(err => console.log(err));

// use the routes imported
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
app.listen(port, () => console.log(`Server is running on port ${port}`));
