"use strict";

var express = require('express');

var dean = require('./Dean.json');

var hunterRoute = require('./Routes/hunterRoute');

var bookRoute = require('./Routes/bookRoute');

var app = express();
app.get('/', function (req, res) {
  return res.send(dean);
});
app.get('/mother', function (req, res) {
  res.send("Hello hunters");
});
app.get('/father', function (req, res, next) {
  console.log('Next callback will send response');
  next();
}, function (req, res) {
  res.send('Hello from Dean Winchester!');
});
app.route('/a').get(function (req, res) {
  res.send("nothing");
}).post(function (req, res) {
  res.send("nothing");
});
app.listen(3000, function () {
  console.log('server running on port 3000');
});