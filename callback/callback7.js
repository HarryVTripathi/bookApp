const a = Math.floor(Math.random() * 5000);
const b = Math.floor(Math.random() * 5000);
const c = Math.floor(Math.random() * 5000);

let letvar = 10;
let varvar = 20;

function reverse (letvar, varvar) {
  setTimeout(() => {
    letvar = letvar + varvar;
    varvar = letvar - varvar;
    letvar = letvar - varvar;
  }, a);
}

function tenFold(letvar, varvar) {
  setTimeout(() => {
    letvar = letvar * 10;
    varvar = varvar * 10;
  }, b);
}

function print(letvar, varvar) {
  setTimeout(() => {
    console.log(letvar);
    console.log(varvar);
  }, c);
}

reverse(letvar, varvar);
tenFold(letvar, varvar);
print(letvar, varvar);
