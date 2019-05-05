import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const router1 = express.Router();

//Application level middlewares
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("This middleware gets called every time any request is received");
    next();
});

//Router level middlewares
router1.use((req, res, next) => {
    console.log("Middleware called for every request to this router");
    next();
});
router1.use((req, res, next) => {
    console.log("Another middleware called for every request to this router");
    next();
});


router1.get('/', (req, res) => {
    console.log('Executed for base URL');
    res.send('Nothing special');
})

app.use('/router1', router1);

app.listen(3000, () => {
    console.log('server running on port 3000');
});