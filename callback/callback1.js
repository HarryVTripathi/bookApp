const express = require('express');

const app1 = express();
const app2 = express();

function middlerware1(next) {
  setTimeout(function() {
    process.stdout.write(' Middleware chala -> ');
  }, 3000);
  next();
}

app1.use('/', middlerware1);
app2.use('/', middlerware1);

app1.get('/getit', (req, res) => {
  res.json('chala');
})

app1.listen(3000, () => {
  process.stdout.write(' Running on port 3000 ->');
});

app2.listen(8000, () => {
  process.stdout.write(' Running on port 8000 ->');
});