import express from 'express';
import bodyParser from 'body-parser';
const app = express();

//  for parsing application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("This middleware gets called every time any request is received");
    next();
});



let cb0 = (req, res, next) => {
    req.body.someProp1 = "someVal1";
    next();
}
  
let cb1 = (req, res, next) => {
    req.body.someProp2 = "someVal2";    
    next();
}

let cb2 = (req, res) => {
    res.json(req.body);
}
  
app.get('/somePath', [cb0, cb1, cb2]);

app.listen(3000, () => {
    console.log('server running on port 3000');
});