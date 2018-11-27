require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("errorhandler");
const passport = require('passport');
const session = require("express-session");

// Connect the database:
const db = require('./config/database').mongoURI;

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Models and Passport
require("./models/User");

// Define Routes
const users = require('./routes/api/users');

// Passport
require("./config/passport")(passport);

// Create app instance
const app = express();

// Middleware 
app.use(cors());
app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "passport-tutorial",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Home Page
app.get('/', (req, res) => {
  res.send('Hey, This is Node!')
});

// Use Routes
app.use('/api/users', users);
// Basic error handling
app.use((req, res, err) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  });
});

// Specify port for production and locally
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on ${port}`));