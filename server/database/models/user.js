const mongoose = require('mongoose'); //needs mongoose package to execute dB functions
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

//Schema for all user documents

const userSchema = new Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, unique: false, required: true},
  fname: {type: String, unique: false, required: true},
  lname: {type: String, unique: false, required: true},
  permission: {type: Number, unique: false, required: true},
  courses: {type:[Number], unique: false, required: false}
});

//methods that can be used for this schema
userSchema.methods = {
  checkPassword: function(inputPassword){
    return bcrypt.compareSync(inputPassword, this.password);//compare two functions, returns true or false
  },
  hashPassword: function(plainTextPassword){
    return bcrypt.hashSync(plainTextPassword, 10);//hashes password according to salt rounds, returns hashed string
  }
}

//Pre-save hooks, this will run when save() is called and complete before save() does its job
userSchema.pre('save', function(next){
  if(!this.password){//before save checks if there is a password
    console.log('No password provided!')
    next()//used to automatically advance to the next step, will not wait for asynchronous functions to resolve
  }else{
    console.log('Password in pre-save');

    this.password = this.hashPassword(this.password);
    next()
  };
});

const User = mongoose.model('User', userSchema);//will create user documents according to schema and save them in user collections
module.exports = User;
