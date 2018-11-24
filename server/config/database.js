// if production, use Mlab else use local db
// if (process.env.NODE_ENV === "production"){
    module.exports = { mongoURI: 'mongodb://68.183.57.30:27017/hashtaghound'}
// } else {
    // module.exports = { mongoURI: 'mongodb://localhost/hashtaghound' }
// }