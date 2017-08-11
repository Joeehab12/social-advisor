var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var options = {
    origin: '*',
    methods: 'GET,PUT,POST,OPTIONS',
    allowedHeaders: 'Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept',
    credentials: true
};
var allowCrossDomain = function(req, res, next) {
    if ('OPTIONS' == req.method) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      res.send(200);
    }
    else {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      next();
    }
};
/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});*/
app.use(allowCrossDomain);
//app.use(cors());
//app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
