const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

//document structure
const SubmissionSchema = new Schema({
  student_id: {type: Number, required: true},
  submittedOn: {type: Date, required: true},
  content: Schema.Types.Mixed
});

const assignSchema =  new Schema({
  course:{
    id: {type: Number, required: true},
    name: {type: String, required: true}
  },
  name:{type:String, required:true},
  type:{type:String, required: true},
  desc:Schema.Types.Mixed,
  tags:[String],
  visible:{type:Boolean},
  due:{type:Date},
  submissions: [SubmissionSchema]
});

const Assign = mongoose.model('Assignment', assignSchema);
module.exports = Assign;
