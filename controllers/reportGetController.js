module.exports.getReport = function(req,res){
    var Report = require('../models/report.js');
    res.setHeader('Access-Control-Allow-Origin', '*');
    Report.find({}, function(err, reports) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type','application/json');
    res.status(200).json(reports);
  });
}
