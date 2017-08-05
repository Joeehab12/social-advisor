module.exports.ask = function(req,res){
    var Problem = require('../models/problem.js');

    var problem  = new Problem({
    title: req.body.title,
    description: req.body.description,
    comments: [{body: req.body.comment,upvotes: req.body.upvotesc ,downvotes: req.body.downvotesc}],
    answers: [{body: req.body.answer,upvotes: req.body.upvotesa ,downvotes: req.body.downvotesa}],
    userId: "",
    upvotes: req.body.upvotes,
    downvotes: req.body.downvotes
    });

    problem.save(function(err){
            if (err) throw err;
            console.log('problem saved successfuly');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json({
                status: "success"
            });
        })


}
