var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
    title: {type: String,index: true},
    description: {type: String,index: true},
    tags:[{type: String}],
    comments: [{body: String,upvotes: Number,downvotes: Number,user_id:String}],
    answers: [{body: String,upvotes: Number,downvotes: Number,user_id:String}],
    userId: String,
    upvotes: Number,
    upvoted: Boolean,
    downvoted: Boolean,
    downvotes: Number,
    voting_user_ids: [{voting_user_id:String}]
});
var Problem = mongoose.model('Problem',mySchema);

mySchema.index({title: "text",description:"text"});

module.exports = Problem;
