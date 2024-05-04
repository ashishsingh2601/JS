// lodash's once polyfill
function once(func) {
  let ranOutput;

  return function (...arguments) {
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



const onceee = (fn, context = {}) => {
  let ran;

  return function (...args) {
    if(fn){
      ran = fn.apply(context || this, [...args]);
      ran = null;
    }
    return ran;
  }
}


const memoizer = (fn, context) => {
  const map = new Map();

  return function(...args) {
    let key = JSON.stringify(...args);

    if(map.has(key)){
      return map.get(key);
    }else{
      let result = fn.call(context || this, ...args);
      map.set(key, result);
      return result;
    }
  }
}

