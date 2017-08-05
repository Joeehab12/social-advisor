var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/social-advisor');
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = 8000;

app.listen(port,function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
