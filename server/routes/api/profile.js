const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require('passport');
// Load 'users' and 'profile' models
const User = mongoose.model("users");
const Profile = mongoose.model("profile");

// @route   GET api/profile/
// @desc    Get Current User's profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id})
        .then(profile => {
            if (!profile) {
                return res.status(404).json({
                    profile: "not found"
                })
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   POST api/profile/
// @desc    Create Current User's profile
// @access  Private
// router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
//     // Get fields
//     const profileFields = {};
//     profileFields.user = req.user.id;
//     // if body went through, assign the value
//     if (req.body.handle) profileFields.handle = req.body.handle;
//     if (req.body.industry) profileFields.industry = req.body.industry;
//     if (req.body.company) profileFields.company = req.body.company;
//     if (req.body.website) profileFields.website = req.body.website;
//     if (req.body.location) profileFields.location = req.body.location;
//     Profile.findOne({ user: req.user.id })
//         .then(profile => {
//             if (profile) {
//                 // Update
//                 Profile.findOneAndUpdate({ user: req.})
//             }
//         })
// });

module.exports = router;