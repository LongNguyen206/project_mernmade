const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require('passport');
// Load 'account' model
const Profile = mongoose.model("profile");
const Account = mongoose.model("accounts");

// @route   GET api/accounts/handle/:handle
// @desc    Get account by handle
// @access  Private
router.get('/handle/:handle', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findOne({ handle: req.params.handle })
        .then(account => {
            if (!account) {
                return res.status(404).json({
                    account: "not found"
                })
            }
            res.json(account);
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/accounts/handle/:handle/shortlist
// @desc    Add account to user's shortlist
// @access  Private
router.post('/handle/:handle/shortlist', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findOne({ handle: req.params.handle })
        .then(account => {
            if (!account) {
                return res.status(404).json({
                    account: "not found"
                })
            }
            Profile.findOne({ user: req.user.id })
                .then(profile => {
                    // if Profile exists
                    if (profile) {
                        // Check if the account is already in this profile's shortlist
                        if (profile.shortlist.indexOf(account.id) > -1) {
                            profile.shortlist.splice(profile.shortlist.indexOf(account.id), 1);
                        } else {
                            profile.shortlist.push(account.id);
                        }
                    }
                    profile.save()
                    .then(profile => res.json(profile));
                });
        })
        .catch(err => res.status(404).json(err));
});

// @route   GET api/accounts/id/:user_id
// @desc    Get account by account ID
// @access  Private
router.get('/id/:account_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findById({ _id: req.params.account_id })
        .then(account => {
            if (!account) {
                return res.status(404).json({
                    account: "not found"
                })
            }
            res.json(account);
        })
        // for ID, we need to specify the error
        .catch(err => res.status(404).json({
            account: "not found"
        }));
});

module.exports = router;