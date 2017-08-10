module.exports.getAnswer = function(req,res){
    var Problem = require('../models/problem.js');

    Problem.find({_id:req.params.id},function(err,data){
        console.log(data[0].answers);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.status(200).json({answers: data[0].answers});
    });

}
