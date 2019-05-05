"use strict";

var path = require('path');

var fs = require('fs');

var addBook = function addBook(req, res) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.resolve(__dirname + '/books.json'), {
      encoding: 'utf-8'
    }, function (err, data) {
      if (err) reject(err);else resolve(data);
    });
  }).then(function (data) {
    return new Promise(function (resolve, reject) {
      var books = JSON.parse(data); //console.log(data);
      //console.log(books.list);

      var book = {
        bookId: req.params.bookId,
        bookName: req.params.bookName,
        genre: req.params.genre
      };
      books.list.push(book);
      console.log(books);
      var wdata = JSON.stringify(books);
      resolve(wdata);
    });
  }).then(function (wdata) {
    return new Promise(function (resolve, reject) {
      fs.writeFile(path.resolve(__dirname + '/books.json'), wdata, function (err) {
        err ? reject(err) : resolve(wdata);
      });
    });
  }).then(function (wdata) {
    res.send(wdata);
  })["catch"](function (err) {
    res.send(err);
  });
};

module.exports = addBook;