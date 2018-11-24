const express = require('express');
const app = express();
//require MongoDB driver
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
//require mongoose
const mongoose = require('mongoose');
//require the body parser to parse through the form content
const bodyParser = require('body-parser');

// //include the database:
// const db = require('./config/database');

// mongoose.Promise = global.Promise;
// mongoose.connect(db.mongoURI, { useNewUrlParser: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log(err));

// Connection URL
const url = 'mongodb://68.183.57.30:27017';

// Database Name
const dbName = 'hashtaghound';

// Use connect method to connect to the server
MongoClient.connect(url, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

app.get('/', (req, res) => {
    res.send('Hey, UPDATED AGAIN')
});

//specify port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
});