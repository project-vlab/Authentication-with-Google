require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '866978810687-6iqfiq820nu1ofti8jhi5m0nvk8e8oad.apps.googleusercontent.com',
    clientSecret: 'ggVhhfCdIyN3zpGQZzj5AtXT',
    callbackURL: 'http://localhost:5050/auth/google/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));