const User = require('../database/models/user'); //accesses the user model and its functions
const LocalStrategy = require('passport-local').Strategy //yeets functionality of local strategy from passport-local package

const strategy = new LocalStrategy({
  usernameField: 'username'
}, function(username, password, done) {
  User.findOne({//LocalStrategy uses object framework created by database user object
    username: username
  }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, {message: 'Incorrect username'});
    }
    if (!user.checkPassword(password)) {
      return done(null, false, {message: 'Incorrect password'});
    }
    return done(null, user);
  });
})

module.exports = strategy;
