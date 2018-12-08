const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require('passport');
// Load 'users' and 'profile' models
const User = mongoose.model("users");
const Profile = mongoose.model("profile");
const Account = mongoose.model("accounts");

// @route   GET api/profile/
// @desc    Get current user's profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
        // fetch additional data from 'users' schema
        .populate('user', ['name', 'email']) 
        .then(profile => {
            if (!profile) {
                return res.status(404).json({
                    errMsg: "Profile not found"
                })
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/all
// @desc    Get all user profiles
// @access  Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.find()
        // fetch additional data from 'users' schema
        .populate('user', ['name', 'email']) 
        .then(profiles => {
            if (!profiles) {
                return res.status(404).json({
                    errMsg: "No Profiles Found"
                })
            }
            res.json(profiles);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Private
router.get('/handle/:handle', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ handle: req.params.handle })
        .populate('user', ['name'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json({
                    errMsg: "Profile not found"
                })
            }
            res.json(profile);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Private
router.get('/user/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.params.user_id })
        .populate('user', ['name', 'email'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json({
                    errMsg: "Profile not found"
                })
            }
            res.json(profile);
        })
        // for ID, we need to specify the error
        .catch(err => res.status(404).json({
            errMsg: "Profile not found"
        }));
});

// @route   GET api/profile/shortlist
// @desc    Get Current User's shortlist of accounts
// @access  Private
router.get('/shortlist', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ user: req.user.id })
        .populate('shortlist', ['name', 'platform'])
        .then(profile => {
            if (!profile) {
                return res.status(404).json({
                    errMsg: "Profile not found"
                })
            }
            if (profile.shortlist.length !== 0) {
                res.json(profile.shortlist)
            } else {
                return res.status(404).json({
                    errMsg: "Your list is empty"
                })
            }
        })
        .catch(err => res.status(404).json(err));
});

// @route   POST api/profile/
// @desc    Create or Edit Current User's profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    // Empty handle validation
    if ((!req.body.handle) || (req.body.handle.trim().length === 0)) {
        return res.status(400).json({
            errMsg: "Username is required"
        });
    }
    // Handle length validation
    if ((req.body.handle.length < 2) || (req.body.handle.length > 40)) {
        return res.status(400).json({
            errMsg: "Username must be between 2 and 40 characters"
        });
    }
    // Handle format validation
    if (/^[a-zA-Z0-9_]*$/.test(req.body.handle) == false) {
        return res.status(400).json({
            errMsg: "Username must not contain special characters except underscores"
        });
    }
    // Website format validation
    if ((req.body.website) && (/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(req.body.website) == false)) {
        return res.status(400).json({
            errMsg: "Website is invalid"
        });
    }
    // if body went through, assign the value
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    Profile.findOne({ user: req.user.id })
        .then(profile => {
            // if Profile exists
            if (profile) {
                // Update
                Profile.findOneAndUpdate(
                    { user: req.user.id }, 
                    { $set: profileFields },
                    { new: true})
                    .then(profile => res.json(profile));
            } else {
                // Create
                // Check if handle exists
                Profile.findOne({ handle: profileFields.handle })
                    .then(profile => {
                        if (profile) {
                            res.status(400).json({ errMsg: "Username already exists" });
                        }
                        // Save
                        new Profile(profileFields).save()
                            .then(profile => res.json(profile));
                    });
            }
        });
});

// @route   DELETE api/profile/
// @desc    Delete current user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
        .then(() => {
            User.findOneAndRemove({ _id: req.user.id })
                .then(() => res.json({ msg: "Success"}))

        })
        .catch(err => res.status(404).json(err));
});

module.exports = router;