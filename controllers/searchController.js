module.exports.search = function(req,res,next){
    var Problem = require('../models/problem');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    Problem.find({$text: {$search: req.body.keyword}},function(err,data){

        if (err){
          res.json({status: "Failed",message: err});
        }
        else{
          res.status(200).json(data);
        }
    });
}
