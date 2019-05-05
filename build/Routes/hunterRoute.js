"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var HRt = express.Router();
HRt.use(function (req, res, next) {
  res.append("someKey", "someValue");
  console.log("Middleware of the route HRt");
  next();
});
HRt.get('/', function (req, res) {
  res.send('Base URL for Hunter Route');
});
HRt.get('/angel', function (req, res) {
  res.send('Angels on the hunter route');
});
module.exports = HRt;