module.exports.postComment = function(req,res){
    var Problem = require('../models/problem.js');
    var id = req.params.id;
    Problem.findByIdAndUpdate(id, {$push: {"comments": {body: req.body.comment, upvotes: 0,downvotes:0}}},
    {safe: true, upsert: true},function ( err,model){
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({status:"success"});
        console.log('comment added successfully.');
    });
}
