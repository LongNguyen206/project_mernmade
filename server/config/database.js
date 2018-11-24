if (process.env.NODE_ENV === "production"){
    module.exports = { mongoURI: 'mongodb://68.183.57.235:27017/hashtaghound'}
} else {
    module.exports = { mongoURI: 'mongodb://localhost/hashtaghound' }
}