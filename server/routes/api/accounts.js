const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require('passport');
// Load 'account' model
const Profile = mongoose.model("profile");
const Account = mongoose.model("accounts");

// @route   GET api/accounts/all
// @desc    Get all accounts
// @access  Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.find()
        .then(accounts => {
            if (!accounts) {
                return res.status(404).json({
                    accounts: "none"
                })
            }
            res.json(accounts);
        })
        .catch(err => res.status(404).json(err));
});

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

// @route   GET api/accounts/id/:account_id
// @desc    Get account by account ID
// @access  Private
router.get('/id/:account_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findById(req.params.account_id)
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

// @route   POST api/accounts/handle/:handle/shortlist
// @desc    Add account to current user's shortlist
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
                            // If it is, remove it from shortlist
                            profile.shortlist.splice(profile.shortlist.indexOf(account.id), 1);
                        } else {
                            // Else, add it to the start of shortlist array
                            profile.shortlist.unshift(account.id);
                        }
                    }
                    profile.save()
                    .then(profile => res.json(profile));
                });
        })
        .catch(err => res.status(404).json(err));
});

// @route   POST api/accounts/:account_id/review
// @desc    Add a review to this account, by current user
// @access  Private
router.post('/:account_id/review', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findById(req.params.account_id)
        .then(account => {
            const newReview = {
                reviewText: req.body.text,
                // reviewName: req.body.name,
                // reviewAvatar: req.user.id,
                reviewUser: req.user.id
            }
             // Empty text validation
            if ((!req.body.text) || (req.body.text.trim().length === 0)) {
                return res.status(400).json({
                text: "is required"
                });
            }
            // Text length validation
            if ((req.body.text.length < 3) || (req.body.text.length > 300)) {
                return res.status(400).json({
                text: "must be between 3 and 300 characters"
                });
            }
            // // Add to reviews array
            account.reviews.unshift(newReview);
            // Save
            account.save()
                .then(account => res.json(account));
        })
        .catch(err => res.status(404).json({msg: "Something went wrong"}));
});

// @route   POST api/accounts/:account_id/review/:review_id
// @desc    Edit a review to this account, by current user
// @access  Private
router.post('/:account_id/review/:review_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findById(req.params.account_id)
        .then(account => {
            // Check if review exists
            if (account.reviews.filter(review => review._id.toString() === req.params.review_id).length === 0) {
                return res.status(404).json({ review: "not exists"})
            }
            // Get Edit index
            const editIndex = account.reviews.map(item => item._id.toString()).indexOf(req.params.review_id)
            const editedReview = {
                reviewText: req.body.text,
                // reviewName: req.body.name,
                // reviewAvatar: req.user.id,
                reviewEditedStatus: true
            }
            // Overwrite old review
            account.reviews[editIndex] = editedReview;
            // Save
            account.save()
                .then(account => res.json(account));
        })
        .catch(err => res.status(404).json({msg: "Something went wrong"}));
});

module.exports = router;