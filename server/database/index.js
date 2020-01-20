//Imports and uses mongoose package
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Stores the url of the database, will likely have to be an environment variable
const dbURL = 'mongodb://localhost:27017/proctorDB';

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to database');
}, (err) => {
  console.log('Error connecting to database:');
  console.log(err);
});
//.then() function is part of Promise API. each accepts success value
//operation and error. returns a promise that can be used in follow-up .then()
//P1(s,e).P2(s,e).P3(s,e)
module.exports = mongoose.connection;
//export the connection, which will be to proctorDB as defined on line 6
