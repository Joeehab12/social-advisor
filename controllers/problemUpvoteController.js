module.exports.problemUpvote = function(req,res,next){
var Problem = require('../models/problem.js');

Problem.findByIdAndUpdate(req.params.id,{upvotes:req.body.count,upvoted: req.body.upvoted,downvoted: req.body.downvoted},function(err,data){

  if(err){
    res.status(404).json({status:"failed",message: "could not update problem upvotes."});
  }
  else{
    res.status(200).json({status:"success",message: "succcessfully updated problem upvotes."});
  }
});
}
