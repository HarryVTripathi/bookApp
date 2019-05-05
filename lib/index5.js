"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var router1 = _express["default"].Router();

app.use('/somePath', router1);
app.get('/somePath', function (req, res) {
  res.send("Handler attached to app instance chala");
});
router1.get('/', function (req, res) {
  res.send("Handler attached to router instance chala");
});
/*
 * Router ka handler chalega yaa app ka handler chalega?
 * Depends.
 * If "app.use(router)" is declared above "app.get", to 
 * router ka handler chalega.
 */

app.listen(3000, function () {
  console.log('server running on port 3000');
});