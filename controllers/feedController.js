module.exports.feed = function(req,res){
    var Problem = require('../models/problem.js');

    Problem.find({}, function(err, problems) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
    res.status(200).json(problems);


  });
}
