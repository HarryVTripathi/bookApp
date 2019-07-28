import express from 'express';
const app = express();
const router1 = express.Router();



app.use('/somePath', router1);

app.get('/somePath', (req, res) => {
    res.send("Handler attached to app instance chala");
});

router1.get('/', (req, res) => {
    res.send("Handler attached to router instance chala");
});

/*
 * Router ka handler chalega yaa app ka handler chalega?
 * Depends.
 * If "app.use(router)" is declared above "app.get", toh 
 * router ka handler chalega.
 */


app.listen(3000, () => {
    console.log('server running on port 3000');
});