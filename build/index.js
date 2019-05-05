"use strict";

var express = require('express');

var dean = require('./Dean.json');

var hunterRoute = require('./Routes/hunterRoute');

var bookRoute = require('./Routes/bookRoute');

var app = express();
app.use('/hunter', hunterRoute);
app.use('/book', bookRoute);
app.listen(3000, function () {
  console.log('server running on port 3000');
});