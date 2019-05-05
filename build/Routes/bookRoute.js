"use strict";

var express = require('express');

var bodyParser = require('body-parser');
/*
 * You can resolve the path relative the location of the 
 * source file - rather than the current directory - using path.resolve:
*/


var addBook = require('../resources/addBookAsync');

var BkRt = express.Router();
BkRt.use(function (req, res, next) {
  res.append("someKey", "someValue");
  console.log("Middleware specific to any path on this route the route BkRt");
  console.log("This middleware will be called whenever any request comes to this route");
  next();
});
BkRt.route('/fiction/:bookId/:bookName/:genre').get(function (req, res) {
  res.send('Get fiction books by id or all fiction book');
}).post(addBook);
module.exports = BkRt;