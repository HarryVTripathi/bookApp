//require('@babel/register');
import express from 'express';
import dean from './Dean.json';
import hunterRoute from './Routes/hunterRoute';
import bookRoute from './Routes/bookRoute';
import wizard from './Routes/wizard'

console.log(dean);
const app = express();

app.use('/hunter', hunterRoute());

app.use('/book', bookRoute());

app.use('/wizard', wizard());

app.listen(3000, () => {
    console.log('server running on port 3000');
});
