module.exports.problem = function(req,res,next){
    // login credentials authentication
    var Problem = require('../models/problem');
    var id = req.params.id;
    Problem.findOne({_id: id},function ( err,problem){
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');

        if (problem){
            console.log('problem found.')
            res.json({
                title: problem.title,
                description: problem.description
            });
        }
        else{
        console.log('problem not found.');
        }
    });
}
