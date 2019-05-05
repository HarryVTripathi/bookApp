"use strict";

var _express = _interopRequireDefault(require("express"));

var _Dean = _interopRequireDefault(require("./Dean.json"));

var _hunterRoute = _interopRequireDefault(require("./Routes/hunterRoute"));

var _bookRoute = _interopRequireDefault(require("./Routes/bookRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/', function (req, res) {
  return res.send(_Dean["default"]);
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