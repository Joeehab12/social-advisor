module.exports.login = function(req,res,next){
    // login credentials authentication
    var jwt = require('jsonwebtoken');
    var User = require('../models/user');
    User.findOne({
            username : req.body.username
        },function ( err,user){
            if (err) throw err;

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
            res.setHeader('Content-Type','application/json; charset=utf-8');
            if (!user){
                res.json({
                    message: "Authentication failed. User not found."
                });
            }
            else{
                if (user.password != req.body.password){
                    res.json({
                        message: "Authentication failed. Incorrect password."
                    });
                }
                else{
                    var token = jwt.sign(user,req.app.get('superSecret'),{
                        expiresIn: 1440
                    });
                    res.json({
                        status: "success",
                        message: "Enjoy your token.",
                        token : token
                    });
                }
            }
        });
}
