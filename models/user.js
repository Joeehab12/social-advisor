var mongoose = require('mongoose');
var Schema = mongoose.Schema;


module.exports = mongoose.model('User',new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    profile_pic: {type: String, default:"http://localhost:8008/blank-profile-picture-973460_640.png"},
    type: String,
}));
