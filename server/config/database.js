if (process.env.NODE_ENV === "production"){
    module.exports = { mongoURI: 'mongodb://68.183.57.235:27017/hashtaghound' }
} else {
    module.exports = { mongoURI: "mongodb://Jesse:q12345@ds139425.mlab.com:39425/hashtag_hound" }
}