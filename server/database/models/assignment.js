const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

//document structure
const assignSchema =  new Schema({
  course:{
    id: {type: Number, required: true},
    name: {type: String, required: true}
  },
  name:{type:String},
  type:{type:String},
  tags:{type:[String]},
  visible:{type:Boolean},
  due:{type:Date}
});

const Assign = mongoose.model('Assignment', assignSchema);
module.exports = Assign;
