"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _express = _interopRequireDefault(require("express"));

var _addBookAsync = require("../resources/addBookAsync");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * You can resolve the path relative the location of the 
 * source file - rather than the current directory - using path.resolve:
*/
function _default() {
  var BkRt = _express["default"].Router();

  BkRt.use(function (req, res, next) {
    res.append("someKey", "someValue");
    console.log("Middleware specific to any path on this route the route BkRt");
    console.log("This middleware will be called whenever any request comes to this route");
    next();
  });
  BkRt.route('/fiction/:bookId/:bookName/:genre').get(function (req, res) {
    res.send('Get fiction books by id or all fiction book');
  }).post(_addBookAsync.addBook);
  return BkRt;
}