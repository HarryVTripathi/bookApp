let a = Math.floor(Math.random() * 5000);

function A() {
  console.log("A");
}

function B() {
  A();
  console.log("B");
}

function C() {
  setTimeout(() => {
    console.log("C");
    let b = Math.floor(Math.random() * 5000);
    setTimeout(B, b);
  }, a);
}

function D() {
  C();
  B();
  console.log("D");
}

D();