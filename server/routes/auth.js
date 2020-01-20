const express = require('express');
const router = express.Router(); //accesses router functions from express package
const User = require('../database/models/user'); //accesses user models and functions
const passport = require('../passport'); //accesses the functions outlined in the passport file, aka how we use the passport package

router.post('/', function(req, res) {
  //This is how we sign a user up

  const {username, password} = req.body; //grabbing the user and pass from the object we get

  User.findOne({
    username: username
  }, function(err, user) {
    if (err) {
      console.log('Post error: ' + err); //this happens when the user can't be found which is good
    } else if (user) {
      res.json({ //this sends back a json object which can be read on the client end saying that a user already exists
        error: 'Sorry, already a user with that username'
      })
    } else {
      const newUser = new User({username: username, password: password});
      newUser.save(function(err, savedUser) {
        if (err) {
          return res.json(err);
        }
        res.json(savedUser); //when the user is saved it sends back the savedUser as a json object
      })
    }
  })
})

router.post('/login', passport.authenticate('local'), function(req, res) {
  //logs users in via local strategy
  const userInfo = {
    username: req.user.username//get the username attribute from the user object passed in the request
  };
  res.send(userInfo);//fires back info object after successful login
});

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', function(req, res) {
  if (req.user) {
    req.logout()//fire logout only if user object is passed
    res.send({message: 'Logging out'});
  } else {
    res.send({message: 'No user provided'});
  }
})

module.exports = router;
