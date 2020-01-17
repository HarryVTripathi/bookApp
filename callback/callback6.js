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
  }, 1500);
}

function print(letvar, varvar) {
  setTimeout(() => {
    console.log(letvar);
    console.log(varvar);
  }, 0)
}

reverse(letvar, varvar);
tenFold(letvar, varvar);
print(letvar, varvar);


// 10 20