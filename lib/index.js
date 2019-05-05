"use strict";

var _express = _interopRequireDefault(require("express"));

var _Dean = _interopRequireDefault(require("./Dean.json"));

var _hunterRoute = _interopRequireDefault(require("./Routes/hunterRoute"));

var _bookRoute = _interopRequireDefault(require("./Routes/bookRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('@babel/register');

console.log(_Dean["default"]);
var app = (0, _express["default"])();
app.use('/hunter', _hunterRoute["default"]);
app.use('/book', _bookRoute["default"]);
app.listen(3000, function () {
  console.log('server running on port 3000');
});