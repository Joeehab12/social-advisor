var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
      next();
    }
};
app.use(allowCrossDomain);

app.set('view engine','ejs');
app.set('views',__dirname + '/public/views');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

app.get('/',function(req,res,next){
    res.render('index');
});

app.get('/login',function(req,res,next){
    res.render('login');
});

app.get('/register',function(req,res,next){
    res.render('register');
});

app.get('/feed',function(req,res,next){
    res.render('feed');
});

app.get('/ask',function(req,res,next){
    res.render('ask');
});

app.get('/problem/:id',function(req,res,next){
    res.render('problem');
});



var port = process.env.PORT || 8008;

app.listen(port,'0.0.0.0',function(){
    console.log('frontend server running at localhost port ' + port +'...');
});
