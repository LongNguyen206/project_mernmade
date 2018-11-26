require('dotenv').config();
const express = require('express');
const app = express();
//require mongoose
const mongoose = require('mongoose');
//require the body parser to parse through the form content
const bodyParser = require('body-parser');

// //include the database:
const db = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Hey, UPDATED AGAIN')
});

//specify port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is up on ${port}`)
});