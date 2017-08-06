var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
    title: String,
    description: String,
    comments: [{body: String,upvotes: Number,downvotes: Number}],
    answers: [{body: String,upvotes: Number,downvotes: Number}],
    userId: String,
    upvotes: Number,
    downvotes: Number
});
module.exports = mongoose.model('Problem',mySchema);

mySchema.index({title: "text",description: "text"});
