import fs from 'fs';
import path from 'path';

const addBook = (req, res) => {
    
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname+'/books.json'), {encoding : 'utf-8'}, (err, data) => {
            if(err)
                reject(err)
            
            else
                resolve(data)
            
        });
    })
    .then((data) => {
        
    return new Promise((resolve, reject) => {
        let books = JSON.parse(data);
        let book = {bookId : req.params.bookId, bookName : req.params.bookName, genre : req.params.genre}
        books.list.push(book);
        console.log(books);

        let wdata = JSON.stringify(books);
        resolve(wdata);
    })

    }).then((wdata) => {
        
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname+'/books.json'), wdata, (err) => {
            err ? reject(err) : resolve(wdata);
        });
    })

    }).then((wdata) => {
        res.send(wdata)
    })

    .catch((err) => {
        res.send(err);
    })
}

module.exports = addBook;