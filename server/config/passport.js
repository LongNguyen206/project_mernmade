const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const FacebookTokenStrategy = require('passport-facebook-token');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Load 'users' model
const User = mongoose.model('users');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETORKEY;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));

  passport.use('facebookToken', new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET
  }, (accessToken, refreshToken, profile, done) => {
        User.findOne({ facebookID: profile.id })
        .then(user => {
          if (user) {
            return done(null, user);
          }
          const newUser = new User({
            facebookID: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          });
          newUser.save()
            .then(user => {
              done(null, user);
            });
        })
        .catch(err => done(err, false, err.message));
    }
  ));
};