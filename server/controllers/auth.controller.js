const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const User = require('../db/models/user');

function isAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401);
    res.end();
  }
};

function loadController(app) {
  passport.use(new LocalStrategy(
    function(username, password, done) {
      console.log('local strategy called with username ', username);
      User.findOne({ username: username })
        .then(user => {
          console.log('user from db ', user);
          if (!user) {
            console.error('user does not exist in the database');
            done(null, false);
          } else {
            user.verifyPassword(password).then(verified => {
              if (verified) {
                done(null, user);
              } else {
                done(null, false);
              }
            });
          }
        });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: process.env.FB_ID || 'INVALID_FB_ID',
    clientSecret: process.env.FB_SECRET || 'INVALID_FB_SECRET',
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'picture.type(large)', 'displayName']
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({where: {
      facebookId: profile.id
    }, defaults: {
      name: profile.displayName,
      imageURL: profile.photos[0].value
    }}).spread(function(user, created) {
      console.log(created, user);
      done(null, user);
    });
  }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
   User.findById(id).then(user => {
    done(null, user);
   }).catch((err) => {
    console.error(err);
   });
  });

  let routes = express.Router();
  routes.post('/signup', (req, res) => {
    //TODO: add db entry creation
    console.log('server-side fetch to signup ', req.body);
    User.findOrCreate({where: { username: req.body.username}})
    .then(user => {
      console.log('signup user ', user);
      res.send('ok');
    }).catch(err => {
      console.error(err);
    });
  });
  routes.post('/auth/local', passport.authenticate('local', { 
    successRedirect : '/profile',
    failureRedirect: '/' 
  }));
  routes.get('/profile', (req, res) => {
    res.send('success');
  });
  routes.get('/auth/status', isAuth, function(req, res) {
    res.json(req.user);
  });
  routes.get('/auth/facebook', passport.authenticate('facebook'));
  routes.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  }));
  routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(routes);
}

module.exports = {
  loadController,
  isAuth
};

