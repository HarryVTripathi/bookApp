import fs from 'fs';
import path from 'path';

const addBook = (req, res) => {
    let rdata = fs.readFileSync(path.resolve(__dirname+'/books.json'), {encoding : 'utf-8'})
    let books = JSON.parse(rdata);

    console.log(rdata);
    console.log(books.list);

    let book = {
        bookId : req.params.bookId,
        bookName : req.params.bookName,
        genre : req.params.genre
    }
    
    books.list.push(book);

    console.log(books);

    let wdata = JSON.stringify(books);
    fs.writeFileSync(path.resolve(__dirname+'/books.json'), wdata);
    res.send("ADDED");
}

module.exports = addBook;