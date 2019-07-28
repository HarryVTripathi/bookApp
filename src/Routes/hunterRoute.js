import express from 'express';

export default function() {

const HRt = express.Router();
process.stdout.write('hunter->');
  HRt.use((req, res, next) => {
    res.append("someKey", "someValue");
    console.log("Middleware of the route HRt");
    next();
  });

  HRt.get('/', (req, res) => {
    res.send('Base URL for Hunter Route');
  });

  HRt.get('/angel', (req, res) => {
    res.send('Angels on the hunter route');
  });

  return HRt;
}