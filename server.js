var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');

var options = {
    origin: '*',
    methods: 'GET,PUT,POST,OPTIONS',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    credentials: true
};
//app.use(cors());
app.use(cors(options));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());



mongoose.connect(process.env.MONGOLAB_URI);
app.set('superSecret','joe-productions');

require('./routes/route.js')(app);

var port = process.env.PORT || 8000;

app.listen(port,'0.0.0.0',function(){
    console.log('Magic is happening at localhost port ' + port +'...');
});
