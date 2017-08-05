module.exports.feed = function(req,res){
    var Problem = require('../models/problem.js');

    Problem.find({}, function(err, problems) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(problems);


  });
}
