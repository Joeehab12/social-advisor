module.exports.ask = function(req,res){
    var Problem = require('../models/problem.js');

    var problem  = new Problem({
    title: req.body.title,
    description: req.body.description,
    comments: [{body: "",upvotes: 0 ,downvotes: 0}],
    answers: [{body: "",upvotes: 0 ,downvotes: 0}],
    userId: "",
    upvotes: 0,
    downvotes: 0
    });

    problem.save(function(err){
            if (err) throw err;
            console.log('problem saved successfuly');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
            res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
            res.json({
                status: "success"
            });
        })


}
