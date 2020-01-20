const passport = require('passport'); //imports passport package in order to use functions
const LocalStrategy = require('./localStrategy'); //imports localStrategy framework from ls file, which also uses passport
const User = require('../database/models/user'); //needs acess to User model and its functions

//What to do on login
passport.serializeUser(function(user, done) { //takes in user object and done function
  console.log('serializeUser called, user: ');
  console.log(user);
  console.log('-------')
  done(null, {_id: user._id});
});

passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called')
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
})

passport.use(LocalStrategy);
module.exports = passport;
