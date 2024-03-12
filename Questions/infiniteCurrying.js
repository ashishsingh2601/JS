//compose and pipe
// function add(a){
//     return a + 3;
//   }
//   function sub(b){
//     return b - 9;
//   }
//   function mul(c){
//     return c * 3;
//   }
  
  const compose = ([...functions]) => {
    return (value) => {
      return functions.reduceRight((acc, fn) => fn(acc), value);
    }
  }


  const compose2 = ([...functions]) => {
    return (value) => {
      return functions.reduceRight((acc, fn) => fn(acc), value)
    }
  }

  const pipe = ([...functions]) => {
    return (value) => {
      return functions.reduce((acc, fn) => fn(acc), value)
    }
  }


  const pipe2 = ([...functions]) => (value) => functions.reduce((acc, fn) => fn(acc), value)
  
//   const pipe = ([...functions]) => {
//     return (value) => {
//       return functions.reduce((acc, fn) => fn(acc), value);
//     } 
//   }
  
  // const result = compose([add, sub, mul]);
//   const result = pipe([add, sub, mul]);
  
//   console.log(result(3))
  

  const add = (x) => (y) => { if(y) {return add(x + y)} else return x } 

  //infinite currying


  function add (x) {
    return function (y) {
      if(y) return add(x+y)
      else return x;
    }
  }

// const add = (x) => {
//     return (y) => {
//         if(y) return add(x+y)
//         return x;
//     }
// }

function add (x) {
  return function (y) {
    if(y) return add(x+y)
    return x;
  }
}





  console.log(compose(add(2)(3)(4)(5)(6)()))