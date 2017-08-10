module.exports.getComment = function(req,res){
    var Problem = require('../models/problem.js');
    var id = req.params.id;
    Problem.find({_id:id},{comments:1},function ( err,data){
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);

        res.json(data);
        console.log('comments retrieved successfully.');
    });
}
