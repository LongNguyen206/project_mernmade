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
        errMsg: "Email is taken"
      });
    }
    // Empty name validation
    if ((!req.body.name) || (req.body.name.trim().length === 0)) {
      return res.status(400).json({
        errMsg: "Name is required"
      });
    }
    // Name length validation
    if ((req.body.name.length < 2) || (req.body.name.length > 30)) {
      return res.status(400).json({
        errMsg: "Name must ne between 2 and 30 characters"
      });
    }
    // Empty email validation
    if ((!req.body.email) || (req.body.email.trim().length === 0)) {
      return res.status(400).json({
        errMsg: "Email is required"
      });
    }
    // Email format validation
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(req.body.email) == false) {
      return res.status(400).json({
        errMsg: "Email is invalid"
      });
    }
    // Confirm Email validation
    if (req.body.email !== req.body.email2) {
      return res.status(400).json({
        errMsg: "Confirm Email does not match"
      });
    }
    // Password format validation
    if (/(?=^.{6,15}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&;*()_+}{";:;'?/>;.<;,])(?!.*\s).*$/.test(req.body.password) == false) {
      return res.status(400).json({
        errMsg: "Password must be at least 6 characters and have at least 1 lower case letter, 1 Upper case letter, 1 digit and 1 special character"
    });
    }
    // Confirm Password validation
    if (req.body.password !== req.body.password2) {
      return res.status(400).json({
        errMsg: "Confirm Password does not match"
    });
    } else {
      const newUser = {
        name: req.body.name,
        email: req.body.email.trim().toLowerCase(),
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
              // Create JWT payload
              const payload = { 
                id: user.id, 
                email: user.email,
                name: user.name,
                avatar: user.avatar  
              }
              // Sign Token
              jwt.sign(
                payload, 
                process.env.SECRETORKEY, 
                { expiresIn: 3600 }, 
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token
                  });
              });
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
    return res.status(400).json({
      errMsg: "Please enter your email"
    });
  }
  if (!user.password) {
    return res.status(400).json({
      errMsg: "Please enter your password"
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
        errMsg: "Wrong Email and/or Password"
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
            name: user.name,
            avatar: user.avatar 
          }
          // Sign Token
          jwt.sign(
            payload, 
            process.env.SECRETORKEY, 
            { expiresIn: 3600 }, 
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              });
          });
        } else {
          return res.status(404).json({
            errMsg: "Wrong Email and/or Password"
          })
        }
      });
  });
});

// @route   POST api/users/auth/facebook
// @desc    Login or Register user with Facebook
// @access  Public
router.post("/auth/facebook", passport.authenticate('facebookToken', { session: false }), (req, res, next) => {
  User.findOne({
    email: req.user.email
  })
  .then(user => {
    // If User doesn't exist
    if (!user) {
      return res.status(404).json({
        errMsg: "no user found with this facebook email"
      })
    }
    // If User exists
    const payload = { 
      id: user.id, 
      email: user.email,
      name: user.name,
      avatar: user.avatar  
    }
    // Sign Token
    jwt.sign(
      payload, 
      process.env.SECRETORKEY, 
      { expiresIn: 3600 }, 
      (err, token) => {
        res.json({
          success: true,
          token: 'Bearer ' + token
        });
    });
  })
  .catch(err => console.log(err));
});

// @route   GET api/users/current
// @desc    Returns Current User
// @access  Private
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email,
    name: req.user.name,
    avatar: req.user.avatar 
  });
});

module.exports = router;