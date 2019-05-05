"use strict";

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addBook = function addBook(req, res) {
  var rdata = _fs["default"].readFileSync(_path["default"].resolve(__dirname + '/books.json'), {
    encoding: 'utf-8'
  });

  var books = JSON.parse(rdata);
  console.log(rdata);
  console.log(books.list);
  var book = {
    bookId: req.params.bookId,
    bookName: req.params.bookName,
    genre: req.params.genre
  };
  books.list.push(book);
  console.log(books);
  var wdata = JSON.stringify(books);

  _fs["default"].writeFileSync(_path["default"].resolve(__dirname + '/books.json'), wdata);

  res.send("ADDED");
};

module.exports = addBook;