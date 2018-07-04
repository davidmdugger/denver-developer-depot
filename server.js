const express = require("express"),
  app = express(),
  path = require("path"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  passport = require("passport");

const port = 8000 || process.env.PORT;

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

// server static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);
app.listen(port, () => console.log(`Server is running on port ${port}`));
