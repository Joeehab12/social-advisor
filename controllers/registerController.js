module.exports.register = function (req,res,next){
    var User = require('../models/user');

    var new_user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password
    });

    new_user.save(function(err){
        if (err) throw err;
        console.log('user saved successfuly');

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({
            status: "success"
        });
    })


}
