let letvar = 10;
let varvar = 20;

function reverse (letvar, varvar) {
  setTimeout(() => {
    letvar = letvar + varvar;
    varvar = letvar - varvar;
    letvar = letvar - varvar;
  }, 3000);
}

function tenFold(letvar, varvar) {
  setTimeout(() => {
    letvar = letvar * 10;
    varvar = varvar * 10;
  }, 0);
}

function print(letvar, varvar) {
  console.log(letvar);
  console.log(varvar);
}

reverse(letvar, varvar);
tenFold(letvar, varvar);
print(letvar, varvar);
