module.exports.user = function(req,res,next){
    // login credentials authentication
    var User = require('../models/user.js');
    var id = req.params.id;
    User.findOne({_id: id},function ( err,user){
        if (err) throw err;


        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE, POST, GET, OPTIONS');
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader('Access-Control-Allow-Credentials', true);

        if (user){
            console.log('user found.')
            res.json({
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                profile_pic: user.profile_pic
            });
        }
        else{
        console.log('user not found.');
        }
    });
}
