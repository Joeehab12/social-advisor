var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('Problem',new Schema({
    title: String,
    description: String,
    comments: [{body: String,upvotes: Number,downvotes: Number}],
    answers: [{body: String,upvotes: Number,downvotes: Number}],
    userId: String,
    upvotes: Number,
    downvotes: Number
}));
