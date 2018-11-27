const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
// Load 'users' model to check for existing email
const User = mongoose.model("users");

// @route   POST api/users/register
// @desc    Local Registration of a New User
// @access  Public
router.post("/register", (req, res) => {  
  User.findOne({
    email: req.body.email
  })
  .then(user => {
    if (user) {
      return res.status(400).json({
        email: "is taken"
      });
    }
    // Empty name validation
    if ((!req.body.name) || (req.body.name.trim().length === 0)) {
      return res.status(404).json({
        name: "is required"
      });
    }
    // Max length for name validation
    if (req.body.name.length > 30) {
      return res.status(404).json({
        name: "is too long"
      });
    }
    // Min length for name validation
    if (req.body.name.length < 2) {
      return res.status(404).json({
        name: "is too short"
      });
    }
    // Empty email validation
    if (!req.body.email) {
      return res.status(404).json({
        email: "is required"
      });
    }
    // Email format validation
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email) == false) {
      return res.status(404).json({
        email: "is invalid"
      });
    }
    // Empty password validation
    if ((!req.body.password) || (req.body.password.trim().length === 0)) {
      return res.status(404).json({
        password: "is required"
      });
    } else {
      const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      };
      //encrypt the password:
      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          //store hash in your password db
          // if error:
          if (err) throw err;
          newUser.password = hash;
          //create User model and insert data into db
          new User(newUser)
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(err => console.log(err))
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Local User Login/ Returns JWT Token
// @access  Public
router.post("/login", (req, res, next) => {
  const user = req.body;
  // Field validations
  if (!user.email) {
    return res.status(422).json({
      email: "is required"
    });
  }
  if (!user.password) {
    return res.status(422).json({
      password: "is required"
    });
  }
  // Find User by email
  User.findOne({
    email: user.email
  })
  .then(user => {
    // If User doesn't exist
    if (!user) {
      return res.status(404).json({
        email: "not found"
      })
    }
    // If User exists, check the password
    bcrypt.compare(req.body.password, user.password)
      .then(isMatch => {
        if (isMatch) {
          // User Matched
          // Create JWT payload
          const payload = { 
            id: user.id, 
            email: user.email,
            name: user.name 
          }
          // Sign Token
          jwt.sign(
            payload, 
            process.env.SECRETORKEY, 
            { expiresIn: 7200 }, 
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
          });
        } else {
          return res.status(400).json({password: "incorrect"})
        }
      });
  });
});

// @route   GET api/users/current
// @desc    Returns Current User
// @access  Private
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    name: req.user.name
  });
});

module.exports = router;