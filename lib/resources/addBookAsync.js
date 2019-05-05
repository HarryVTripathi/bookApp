"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBook = addBook;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("@babel/polyfill");
/**
 * To remove the error : ReferenceError: regeneratorRuntime is not defined
 */


var readBook = function readBook() {
  return new Promise(function (resolve, reject) {
    _fs["default"].readFile(_path["default"].resolve(__dirname + '/books.json'), {
      encoding: 'utf-8'
    }, function (err, data) {
      if (err) reject(err);else resolve(data);
    });
  });
};

var parseBook = function parseBook(req, rdata) {
  var books = JSON.parse(rdata);
  var book = {
    bookId: req.params.bookId,
    bookName: req.params.bookName,
    genre: req.params.genre
  };
  books.list.push(book);
  console.log(books);
  var wdata = JSON.stringify(books);
  return wdata;
};

var writeBook = function writeBook(wdata) {
  return new Promise(function (resolve, reject) {
    _fs["default"].writeFile(_path["default"].resolve(__dirname + '/books.json'), wdata, function (err) {
      err ? reject(err) : resolve(wdata);
    });
  });
};

function addBook(_x, _x2) {
  return _addBook.apply(this, arguments);
}

function _addBook() {
  _addBook = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var rdata, wdata, ans;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("async function running");
            _context.next = 3;
            return readBook();

          case 3:
            rdata = _context.sent;
            wdata = parseBook(req, rdata);
            _context.next = 7;
            return writeBook(wdata);

          case 7:
            ans = _context.sent;
            res.send(ans);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _addBook.apply(this, arguments);
}