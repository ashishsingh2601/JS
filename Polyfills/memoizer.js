function memoizer(func) {
  let result = {};
  return function (...args) {
    let stringifiedArgs = JSON.stringify(args);
    if (!result[stringifiedArgs]) {
      result[stringifiedArgs] = func.apply(this, args);
    }
    return result[stringifiedArgs];
  };
}

function calc(max) {
  let val = 0;
  for (let i = 0; i < max; i++) {
    val = i + i * 2;
  }
  return val;
}

const memoizedCalc = memoizer(calc);

console.log(memoizedCalc(10000000000));



function mem (func) {
  let result = {} 

  function mezdfunc (...args) {
    let stringifiedArgs = JSON.stringify(args);
    if(!result[stringifiedArgs]) result[stringifiedArgs] = func.apply(this, args);
    return result[stringifiedArgs];
  }
}