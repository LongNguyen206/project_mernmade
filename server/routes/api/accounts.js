const router = require("express").Router();
const mongoose = require("mongoose");
const passport = require('passport');

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
                    errMsg: "No Accounts found"
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
                    errMsg: "Account not found"
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
                    errMsg: "Account not found"
                })
            }
            res.json(account);
        })
        // for ID, we need to specify the error
        .catch(err => res.status(404).json({
            errMsg: "Account not found"
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
                    errMsg: "Account not found"
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
                    } else {
                        let newShortlist = [];
                        let profileFields = {};
                        profileFields.user = req.user.id;
                        newShortlist.unshift(account.id);
                        profileFields.shortlist = newShortlist;
                        new Profile(profileFields).save()
                            .then(profile => {
                                res.json(profile)
                            })
                    }
                    profile.save()
                    .then(profile => res.json(profile));
                });
        })
        .catch(err => res.status(404).json({
            errMsg: "Account not found"
        }));
});

// @route   POST api/accounts/:account_id/review
// @desc    Add a review to this account, by current user
// @access  Private
router.post('/:account_id/review', passport.authenticate('jwt', { session: false }), (req, res) => {
    console.log("hitting here")
    Account.findById(req.params.account_id)
        .then(account => {
            const newReview = {
                reviewText: req.body.reviewText,
                reviewUserName: req.user.name,
                reviewUserAvatar: req.user.avatar,
                reviewUser: req.user.id,
                reviewRate: req.body.reviewRate
            }
             // Empty text validation
            if ((!req.body.reviewText) || (req.body.reviewText.trim().length === 0)) {
                return res.status(400).json({
                    errMsg: "Text is required"
                });
            }
            // Text length validation
            if ((req.body.reviewText.length < 3) || (req.body.reviewText.length > 300)) {
                return res.status(400).json({
                    errMsg: "Review must be between 3 and 300 characters"
                });
            }
            // Empty rating validation
            if (!req.body.reviewRate) {
                return res.status(400).json({
                    errMsg: "Rating is required"
                });
            }
            // // Add to reviews array
            account.reviews.unshift(newReview);
            account.numberOfReviews++;
            account.totalRate += req.body.reviewRate;
            account.averageRate = (account.totalRate/account.numberOfReviews);
            // Save
            account.save()
                .then(account => res.json(account));
        })
        .catch(err => res.status(404).json({errMsg: "Something went wrong"}));
});

// @route   POST api/accounts/:account_id/review/:review_id
// @desc    Edit a review to this account, by current user
// @access  Private
router.post('/:account_id/review/:review_id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Account.findById(req.params.account_id)
        .then(account => {
            // Check if review exists
            if (account.reviews.filter(review => review._id.toString() === req.params.review_id).length === 0) {
                return res.status(404).json({ errMsg: "Review does not exist"})
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
        .catch(err => res.status(404).json({errMsg: "Something went wrong"}));
});

module.exports = router;