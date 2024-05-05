const obj1 = {a: 3, b: 6, c: 9, f: 18, g: 24};
const obj2 = {a: 2, b: 6, c: 12, d: 15, g: 24};

let out = {};

for(let key in obj1){ 
  if(key in obj2 && obj1[key] === obj2[key]){
    out[key] = obj1[key];
  }
}
console.log(out);


const arr = [1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, -11, 76, 67, 76, 89, 89, 89, 99, 99];

let max = -Infinity, secmax = -Infinity;
for(let key of arr){

  if(key > max){
    secmax = max;
    max = key;
  }else if(key > secmax && key < max){
    secmax = key;
  }
  
  
}
console.log(secmax);

// // arr.sort((a, b) => b - a);
// // console.log(arr[1]);


const arr2 = [1, 2, 3, 4, 5, 6];

// // let k = 2;
// // while(k--){
// //   let shifted = arr2.shift();
// //   arr2.push(shifted);
// // }
// // console.log(arr2);
    

function rotator(arr, k, direction = "right") {
    let len = arr.length;
  
    let rotationOffset = direction === "left" ? k % len : len - (k  % len);
    
    return [...arr.slice(rotationOffset), ...arr.slice(0, rotationOffset)];
}
console.log(rotator(arr2, 100, "right"));
