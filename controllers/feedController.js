module.exports.feed = function(req,res){
    var Problem = require('../models/problem.js');

    Problem.find({}, function(err, problems) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(problems);


  });
}
