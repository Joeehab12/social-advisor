module.exports.postAccepted = function(req,res){
    var Problem = require('../models/problem.js');
    var id = req.params.id;
    Problem.findOneAndUpdate({_id:id,"answers._id": req.body.answer_id}, {'$set': {"answers.$.accepted":  true}}
    ,function ( err,model){
        if (err) throw err;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);

        res.json({status:"success"});
        console.log('accepted updated successfully.');
    });


    }
