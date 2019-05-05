"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var app = express();
var router1 = express.Router(); //Application level middlewares

app.use(bodyParser.json());
app.use(function (req, res, next) {
  console.log("This middleware gets called every time any request is received");
  next();
}); //Router level middlewares

router1.use(function (req, res, next) {
  console.log("Middleware called for every request to this router");
  next();
});
router1.use(function (req, res, next) {
  console.log("Another middleware called for every request to this router");
  next();
});
router1.get('/', function (req, res) {
  console.log('Executed for base URL');
  res.send('Nothing special');
});
app.use('/router1', router1);
app.listen(3000, function () {
  console.log('server running on port 3000');
});