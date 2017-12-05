module.exports.profile = function(req,res,next){
var http = require('http');
var fs = require('fs');
var request = require('request');
var randomString = require('randomstring');
// Or with cookies
// var request = require('request').defaults({jar: true});

var filename =randomString.generate({
  length: 10,
  charset: 'alphabetic'
});
var ext;
if (req.body.url){
 ext = req.body.url.substring("data:image/".length, req.body.url.indexOf(";base64"))
}
request.get({url: req.body.url, encoding: 'base64'}, function (err, response, body) {

  // our data URL string from canvas.toDataUrl();
var imageDataUrl = req.body.url;
// declare a regexp to match the non base64 first characters
var dataUrlRegExp = /^data:image\/\w+;base64,/;
// remove the "header" of the data URL via the regexp
var base64Data = imageDataUrl.replace(dataUrlRegExp, "");
// declare a binary buffer to hold decoded base64 data
var imageBuffer = new Buffer(base64Data, "base64");
// write the buffer to the local file system synchronously
fs.writeFileSync("./social-advisor-frontend/public/assets/"+req.body.id+'.'+ext, imageBuffer);

});
var User = require('../models/user.js');

User.findByIdAndUpdate(req.body.id,{profile_pic:"http://localhost:8008/assets/"+req.body.id +'.'+ext},function(err,data){

  if(err){
    res.status(404).json({status:"failed",message: "could not update user profile picture."});
  }
  else{
    res.status(200).json({status:"success",message: "succcessfully updated user profile picture."});
  }
});






}
