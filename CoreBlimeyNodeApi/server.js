// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

// set our port
var port = process.env.PORT || 8888;

// connect to our database
var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.99.100:27017/test');

// middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// load controllers
app.use(require('./app/controllers/index'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
