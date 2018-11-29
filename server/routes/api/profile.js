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

module.exports = router;