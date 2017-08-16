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
if (typeof req.body.url !== "undefined"){
 ext = req.body.url.substring(req.body.url.lastIndexOf('.'));
}
request.get({url: req.body.url, encoding: 'binary'}, function (err, response, body) {
  fs.writeFile("./assets/"+ filename + ext, body, 'binary', function(err) {
    if(err){
        fs.writeFile('log.txt',err.toString(),function(err) {
                console.log("The file was saved!");
                //throw err;
        });
        res.json({status:"failed",message:"error occured"})
    }
    else{
        res.json({status: "success",
                  message:"file uploaded to server succcessfully."});
      console.log("The file was saved!");
  }
  });
});
/*var filename = req.body.url;

console.log(filename);
var file = fs.createWriteStream('file.jpg');
console.log(req.body.url);
var request = http.get(req.body.url, function(response) {
  response.pipe(file);
});
*/


}
