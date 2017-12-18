var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schema({
    problem_id: String,
    description: String
});
var Report = mongoose.model('Report',mySchema);

module.exports = Report;
