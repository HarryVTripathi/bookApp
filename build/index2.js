"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var router1 = express.Router(); //  for parsing application/json

app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log("This middleware gets called every time any request is received");
  next();
});

var cb0 = function cb0(req, res, next) {
  req.body.someProp1 = "someVal1";
  next();
};

var cb1 = function cb1(req, res, next) {
  req.body.someProp2 = "someVal2";
  next();
};

var cb2 = function cb2(req, res) {
  res.json(req.body);
};

app.get('/somePath', [cb0, cb1, cb2]);
app.listen(3000, function () {
  console.log('server running on port 3000');
});