import express from 'express';
import {addBook} from '../resources/addBookAsync';
/*
 * You can resolve the path relative the location of the 
 * source file - rather than the current directory - using path.resolve:
*/

export default function() {
    const BkRt = express.Router();
    BkRt.use((req, res, next) => {
        res.append("someKey", "someValue");
        console.log("Middleware specific to any path on this route the route BkRt");
        console.log("This middleware will be called whenever any request comes to this route");
        next();
    });
    
    BkRt.route('/fiction/:bookId/:bookName/:genre')
        .get((req, res) => {
            res.send('Get fiction books by id or all fiction book')
        })
        .post(addBook);
    
    return BkRt
}