import express from 'express';
import dean from './Dean.json';

import hunterRoute from './Routes/hunterRoute';
import bookRoute from './Routes/bookRoute';

const app = express();

app.get('/', (req, res) => res.send(dean));

app.get('/mother', (req, res) => {
    res.send("Hello hunters");
});

app.get('/father', (req, res, next) => {
        console.log('Next callback will send response');
        next();
    }, (req, res) => {
        res.send('Hello from Dean Winchester!');
});

app.route('/a')
    .get((req, res) => {
        res.send("nothing")
    })
    .post((req, res) => {
        res.send("nothing")
    })

app.listen(3000,() => {
    console.log('server running on port 3000');
});
