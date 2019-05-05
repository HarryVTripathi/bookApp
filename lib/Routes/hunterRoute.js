"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default() {
  var HRt = _express["default"].Router();

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
  return HRt;
}