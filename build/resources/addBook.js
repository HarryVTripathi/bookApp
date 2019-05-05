"use strict";

var path = require('path');

var fs = require('fs');

var addBook = function addBook(req, res) {
  var rdata = fs.readFileSync(path.resolve(__dirname + '/books.json'), {
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
  fs.writeFileSync(path.resolve(__dirname + '/books.json'), wdata);
  res.send("ADDED");
};

module.exports = addBook;