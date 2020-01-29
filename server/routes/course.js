const express = require('express');
const router = express.Router(); //accesses router functions from express package
const Course = require('../database/models/course'); //accesses user models and functions
const passport = require('../passport');

router.post('/', function(req, res) {
  if (req.isAuthenticated()) {
    Course.findOne({
      course_id: req.course_id
    }, function(err, course) {
      if (err) {
        console.log('Post error' + err);
      } else if (course) {
        res.json({error: 'There is alreayd a course with that ID in the catalog'});
      } else {
        const newCourse = new Course({course_id: req.body.course_id, catalog_name: req.body.catalog_name, name: req.body.name});
        newCourse.save(function(err, savedCourse){
          if(err){
            return res.json(err);
          }
          res.json(savedCourse);
        })
      }
    })
  } else {
    res.send("Request denied");
  }
})

//Get basic course data on ALL courses student is registered for
router.get('/courses/:userid', function(req,res){
    const uid = req.params.userid;
    Course.find({'students._id': uid}, 'name course_id instructor', function(err, docs){
      if(err){
        res.send(err);
      }else{
        res.send(docs);
      }
    })
})
//Field a request for a specific course student is registered for
router.get('/courses/:userid/:courseid',function(req,res){
    const uid = req.params.userid;
    const cuid = req.params.courseid;
    Course.findOne({course_id:cuid,'students._id': uid}, function(err, docs){
      if(err){
        res.send(err);
      }else{
        res.send(docs);
      }
    })
})

module.exports = router;
