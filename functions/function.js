function add(a, b) {
  return a + b;
}

let x = add(4, 3);

console.log(x);

function metre(num = 1000) {
  return num / 100;
}

let y = metre(595);

let z = metre();

console.log(y);

console.log(z);

(async () => {
  console.log("Hello");
})();

function getFactorial(n) {
  if (n == 0) {
    return 1;
  }
  return n * getFactorial(n - 1);
}

let n = 100;

let result = getFactorial(n);

console.log(result);
