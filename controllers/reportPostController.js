module.exports.postReport = function(req,res){
    var Report = require('../models/report.js');
    var new_report = new Report({
        problem_id: req.body.id,
        description: req.body.description
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    new_report.save(function(err){
        if (err) throw err;
        console.log('report saved successfuly');
        res.json({
            status: "success"
        });
    });
}
