require("@babel/polyfill");
/**
 * To remove the error : ReferenceError: regeneratorRuntime is not defined
 */

import fs from 'fs';
import path from 'path';

const readBook = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname+'/books.json'), {encoding: 'utf-8'}, (err, data) => {
            if(err)
                reject(err);
            else
                resolve(data);
        });
    })
}
        
const parseBook = (req, rdata) => {

    let books = JSON.parse(rdata);
    let book = {bookId: req.params.bookId, bookName: req.params.bookName, genre: req.params.genre}

    books.list.push(book);
    console.log(books);

    let wdata = JSON.stringify(books);
    return wdata;
}

const writeBook = (wdata) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname+'/books.json'), wdata, (err) => {
            err ? reject(err) : resolve(wdata);
        });
    })

}

export async function addBook(req, res) {
    console.log("async function running");
    let rdata = await readBook();
    let wdata = parseBook(req, rdata);
    let ans = await writeBook(wdata);
    res.send(ans);
}
