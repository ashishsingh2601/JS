// lodash's once polyfill
function once(func) {
  let ranOutput;

  return function () {
    if (func) ranOutput = func.apply(this, arguments);
    func = null;

    return ranOutput;
  };
}

const greet = once((a, b) => {
  console.log("Hey!" + a + " " + b);
});

greet(1, 2);
greet();
greet();
greet();
greet();
greet();


// With normal closure

function oneTime() {
  let count = 0;

  return function () {
    if (count > 0) return;
    else {
      console.log("called");
      count++;
    }
  };
}

const res = oneTime();
console.log(res());
console.log(res());
console.log(res());
console.log(res());
console.log(res());
