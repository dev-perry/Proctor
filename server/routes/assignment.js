const express = require('express');
const router = express.Router(); //accesses router functions from express package
//accesses models and functions
const Assign = require('../database/models/assignment');
const User = require('../database/models/user.js');
const passport = require('../passport');

//Create a new Assignment
router.post('/', function(req, res) {
  if (req.isAuthenticated()) {
    const newAssignment = new Assign({
      course_id: req.body.course_id,
      name: req.body.name,
      type: req.body.type,
      tags: req.body.tags,
      visible: req.body.visible,
      due: req.body.due
    });

    newAssignment.save(function(err, savedAssign) {
      if (err) {
        return res.json(err);
      }
      res.json(savedAssign);
    })
  } else {
    res.send("Request denied");
  }
});

//return the user's assignment calendar
router.get('/calendar/:uid', function(req, res) {
if(req.isAuthenticated()){
  User.findOne({
    _id: req.params.uid
  }, 'courses', function(err, docs) {
    if (err) {
      return err;
    } else {
      return docs;
    }
  }).then((response) => { //after getting courseID array from user object, match documents in assignment collection
    Assign.find({
      'course.id': {
        $in: response.courses
      },
      visible: true
    }, 'name due course', function(err, docs) {
      if (err) {
        res.json(err);
      } else {
        res.json(docs);
      }
    });
  }).catch(function(error) {
    console.log('Error getting assignments:');
    console.log(error);
  })}else{
    res.send("Request denied");
  }
})

//Return all(a) assignments for one course
router.get('/:cuid', function(req, res) {
  if (req.isAuthenticated()) {
    Assign.find({'course.id': req.params.cuid,
      visible: true
    }, 'name tags due course', function(err, docs) {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    });
  }else{
    res.send("Request denied");
  }
})

//Return data for single assignment
router.get('/s/:aid', function(req,res){
  if(req.isAuthenticated()){
    Assign.findOne({_id: req.params.aid}, function(err,docs){
      if(err){
        res.send(err);
      }else{
        res.send(docs);
      }
    });
  }else{
    res.send("Request denied");
  }
})

//Modify submission for one assignment
router.post('/submission/:uid/:aid',function(req,res){
  if(req.isAuthenticated()){
    console.log(req);
    res.send("Data caught");
  }else{
    res.send("Request denied");
  }
})

module.exports = router;
