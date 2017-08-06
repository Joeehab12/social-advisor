module.exports.search = function(req,res,next){
    var Problem = require('../models/problem');
    res.setHeader('Access-Control-Allow-Origin','*');
    Problem.find({$text: {$search: req.body.keyword}},function(err,data){
        res.status(200).json(data);
    });
}
