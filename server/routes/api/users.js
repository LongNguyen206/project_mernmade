const router = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
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
    if (!req.body.name) {
      return res.status(404).json({
        name: "is required"
      });
    }
    if (!req.body.email) {
      return res.status(404).json({
        email: "is required"
      });
    }
    if (!req.body.password) {
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
                // passport.authenticate('local')(req, res, () => {
                  res.json(user);
                // });
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
          res.json({msg: "Success"})
        } else {
          return res.status(400).json({password: "incorrect"})
        }
      })
  })
  // passport.authenticate("local", { session: false }, (err, passportUser, info) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     if (passportUser) {
  //       const user = passportUser;
  //       user.token = passportUser.generateJWT();
  //       return res.json({ user: user.toAuthJSON() });
  //     }
  //     return res.status(400).json({msg: "success"});
  //   })(req, res, next);
});

// //GET current route (required, only authenticated users have access)
// router.get("/current", jwt_auth.required, (req, res, next) => {
//   const { payload: { id } } = req;
//   return User.findById(id).then(user => {
//     if (!user) {
//       return res.sendStatus(400);
//     };
//     return res.json({ user: user.toAuthJSON() });
//   });
// });

module.exports = router;