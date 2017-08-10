module.exports.postAnswer = function(req,res){
    var Problem = require('../models/problem.js');
    var id = req.params.id;
    Problem.findByIdAndUpdate(id, {$push: {"answers": {body: req.body.answer, upvotes: 0,downvotes:0}}},
    {safe: true, upsert: true},function ( err,model){
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({status:"success"});
        console.log('answer added successfully.');
    });
}
