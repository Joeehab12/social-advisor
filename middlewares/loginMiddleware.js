module.exports = function(req,res,next){
    // token authentication
    var jwt = require('jsonwebtoken');
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (token){
            jwt.verify(token,req.app.get('superSecret'),function(err,decoded){
                if(err){
                    return res.json({
                        status: "failed",
                        message: "Failed to authenticate token."
                    });
                }
                else{
                    req.decoded = decoded;
                    
                    next();
                }
            });
        }
        else{
            return res.status(403).send({
                status : "Failed",
                message : "No token provided."
            });
        }


}
