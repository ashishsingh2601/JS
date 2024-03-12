// function flattenObject(obj, parent) {
//   let result = {};

//   function generateFlatObj(obj, parent) {
//     for (let key in obj) {
//       let newParent = parent + key;
//       if (typeof obj[key] === "object" && typeof obj[key] !== null) {
        
//         generateFlatObj(obj[key], newParent + ".");
//       } else {
//         result[newParent] = obj[key];
//       }
//     }
//   }

//   generateFlatObj(obj, parent);
//   return result;
// }


// const flattenObject = (obj, parent) => {
//     const finalObj = {}
    
//     const generateFlatObj = (obj, parent) => {
//       for(let key in obj){
//         let newParent = parent+key;
//         let value = obj[key];
//         if(typeof value === "object"){
//           generateFlatObj(value, newParent+".");
//         }else{
//           finalObj[newParent] = value;
//         }
//       }
//     }

//     generateFlatObj(obj, parent);
//     return finalObj;
// }









const flatner = (obj, parent) => {
    let result = {
    
    }

    const generateFlat = (obj, parent) => {
      
        for(let key in obj){
            let newParent = parent + key
            if(typeof obj[key] === "object" && typeof obj[key] !== null){
                    generateFlat(obj[key], newParent+".");
            }else{
                result[newParent] = obj[key];
            }
        }
    }

    generateFlat(obj, parent);
    return result;
}







function flatObj (obj, parent) {

  let result = {}

  function generate(obj, parent) {
    
    for(let key in obj) {
      let newParent = parent + key
      if(typeof obj[key] === "object" && typeof obj[key] !== null){
          generate(obj[key], newParent+".")
      }else {
        result[newParent] = obj[key];
      }
    }
  } 

  generate(obj, parent);
  return result;
}


function flatMe(obj, parent){
  let result = {};

  function gen(obj, parent){

    for(let key in obj){
      let newParent = parent + key;
      if(typeof key === "object" && typeof key !== null){
        gen(obj[key], newParent + ".");
      }else{
        result[newParent] = obj[key];
      }
    }
  }

  gen(obj, parent);
  return result;

}



const obj = {
  a: "10",
  b: "20",
  c: {
    d: "30",
    e: ["40", "50", [123, 234]],
  },
  f: ["60", "70"],
  g: {
    h: "80",
    i: "90",
    j: {
      k: "100",
    },
  },
};

console.log(flatner(obj, ""));





function flatAll(obj, parent){

  let result = {};

  function gnrate(obj, parent){

    for(let key in obj){
      let newParent = parent + key;
      if(typeof key === "object" && typeof key !== null){
        gnrate(obj[key], newParent + ".")
      }else{
        result[newParent] = obj[key];
      }
    }

  }

  gnrate(obj, parent);
  return result;

}


function flatArray(arr, depth){
  let result = [];

  if(arr.length === 0) return arr;

  arr.forEach((item) => {
    if(Array.isArray(item)) result.push(flatArray(item, depth - 1));
    else{
      result.push(item);
    }
  })


  return result;
}