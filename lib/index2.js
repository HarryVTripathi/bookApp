"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //  for parsing application/json

app.use(_bodyParser["default"].json());
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