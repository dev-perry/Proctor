const mongoose = require('mongoose'); //needs mongoose package to execute dB functions
const Schema = mongoose.Schema;
mongoose.promise = Promise;

//Schema for all course documents

const courseSchema = new Schema({
  course_id:{type: Number},
  catalog_name: {type: String},
  name: {type: String},
  days: {type: [String]},
  time: {type:[String]},
  date: {type: [Date]},
  instructor: {type:[{}]},//array of objects, which will be users pushed by admin
  students: {type:[{}]}//array of objects, which will be users pushed by admin
});

const Course = mongoose.model('Course', courseSchema);//will create course documents according to schema and save them in user collections
module.exports = Course;
