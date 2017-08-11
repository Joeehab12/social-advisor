var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};
app.use(ennableCORS);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
