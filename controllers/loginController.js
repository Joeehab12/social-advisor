module.exports.login = function(req,res,next){
    // login credentials authentication
    var jwt = require('jsonwebtoken');
    var User = require('../models/user');
    User.findOne({
            username : req.body.username
        },function ( err,user){
            if (err) throw err;

            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
            res.setHeader('Content-Type','application/json');
            if (!user){
                res.json({
                    message: "Authentication failed. User not found."
                });
            }
            else{
                if (user.password != req.body.password){
                    res.json({
                        status : "failed",
                        message: "Authentication failed. Incorrect password."
                    });
                }
                else{
                    var token = jwt.sign(user,req.app.get('superSecret'),{
                        expiresIn: 1440
                    });
                    res.json({
                        status: "success",
                        id: user.id,
                        user_type: user.type,
                        message: "Enjoy your token.",
                        token : token
                    });
                    res.end();
                }
            }
        });
}
