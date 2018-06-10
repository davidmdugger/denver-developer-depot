const express = require("express"),
  router = express.Router(),
  User = require("../../models/User"),
  gravatar = require("gravatar"),
  bcrypt = require("bcryptjs"),
  jwt = require("jsonwebtoken"),
  keys = require("../../config/keys"),
  passport = require("passport");

// load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// @route   GET api/users/test
// @desc    Tests a users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Dope, user API works" }));

// @route   POST api/users/register
// @desc    Register a new user
// @access  Public
router.post("/register", (req, res) => {
  // destructure the export from validation/register.js
  const { errors, isValid } = validateRegisterInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // check if email exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json({ errors });
    } else {
      // create the avatar using the gravatar library (if the email entered has an avatar set)
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size,
        r: "pg", // rating,
        d: "mm" // Default
      });

      // create the new user
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      // encrypt the password using bcrypt
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login user and return JWT
// @access  Public
router.post("/login", (req, res) => {
  // destructure the export from validation/register.js
  const { errors, isValid } = validateLoginInput(req.body);

  // check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // find user by email
  User.findOne({ email }).then(user => {
    //check if user is not found
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json({ email: "User not found" });
    }

    // Compare password entered to password stored in DB
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // create jwt payload
        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              yoDawg: "I heard you want a jwt",
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
