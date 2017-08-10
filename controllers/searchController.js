module.exports.search = function(req,res,next){
    var Problem = require('../models/problem');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
    res.setheader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);

    Problem.find({$text: {$search: req.body.keyword}},function(err,data){
        res.status(200).json(data);
    });
}
