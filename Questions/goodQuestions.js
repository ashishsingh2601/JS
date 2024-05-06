const obj1 = {a: 3, b: 6, c: 9, f: 18, g: 24};
const obj2 = {a: 2, b: 6, c: 12, d: 15, g: 24};

let out = {};

for(let key in obj1){ 
  if(key in obj2 && obj1[key] === obj2[key]){
    out[key] = obj1[key];
  }
}
console.log(out);


// find second max
const arrr = [1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, -11, 76, 67, 76, 89, 89, 89, 99, 99];

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




// array flattner
const arr3 = [1,2,[3,4,[5,6,[7,8]]]];

function arrayFlattner(arr) {
  return arr.reduce((accumulator, curr) => {
      if(Array.isArray(curr)){
        accumulator = accumulator.concat(arrayFlattner(curr));
      }else{
        accumulator.push(curr);
      }
   
    return accumulator;
  }, [])
}

console.log(arrayFlattner(arr));



// reverse every character of the string word by word
const stringToReverse1 = 'Welcome To Javascipt Interview';

const reversedString1 = stringToReverse.split(" ");

let finalReversedString1 = "";

[...reversedString].forEach((stringItem) => {
    const reversedStringItem = stringItem.split("").reverse().join("");
    finalReversedString += reversedStringItem + " ";
 
})

console.log(finalReversedString);



// simple promise implementation
function add(a, b){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       const result = a + b;
       resolve(result);
    }, 1000)
  })
}


add(1, 2)
  .then((result) => {
    return add(3, result);
}).then((result) => {
  return add(6, result);
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})




//factorial
function fact(n){
  if(n == 1) {
    return 1;
  }
 
  return fact(n - 1) * n;
}


console.log(fact(15));


// deep copy polyfill
const obj = {
  a: "x",
  b: {
    c: "y",
    d: "xx",
    e: {
      f: "z"
    }
  }
}

function deep(obj){
   if(typeof obj !== "object" || typeof obj == null){
     return obj;
   }
 
    let copy = Array.isArray(obj) ? [] : {};
 
    for(let key in obj){
      copy[key] = deep(obj[key]);
    }
 
  return copy;
 
}

console.log(deep(obj) === obj);  // false





// infinite currying

function add(x){
  return function(y){
    if(y) return add(x + y);
    return x;
  }
}


console.log(add(1)(2)(3)(4)(5)(6)())


// // curry that accepts (6, 3) and (6)(3) both
function mul(x, y){
    if(y != undefined){
      return x * y;
    }else{
      return function(y){
        return x * y;
      }
    }
}


console.log(mul(3, 4))


// closure

// var val = 3;


// const objj = {
//   a: 15,
//   val: val,
// }

// function outer(a){
//   let newVal = this.val;
 
//   function inner(b){
//     console.log(this.a);
//   }
//   console.log(newVal)
//   inner.call(objj, 6);
// }

// outer.call(objj, 9);

// var xx = 100;
// function fn(x) {
//     function fn2(y) {
//         console.log(xx);
//     }
//     fn2(2);
// };

// fn(1);



for(var i = 0; i<5; i++){
  (function(i){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  })(i)
}


// determine if x is an interger

function isInteger(x){
  return (typeof x === "number") && (x % 1 === 0);
}

console.log(isInteger(1));


           

           
           
// uppercase first character of each word in string
const stringToReverse = 'welcome to javascipt interview';

const reversedString = stringToReverse.split(" ");

let finalReversedString = "";

[...reversedString].forEach((item) => {
    finalReversedString += item[0].toUpperCase()+item.slice(1) + " ";
})

console.log(finalReversedString.trim());



// merge two arrays in sorted order
function sortArrAndMerge(arr1, arr2){
  const mergedArr = [...arr1, ...arr2];
 
  mergedArr.sort((a, b) => a - b);
  return mergedArr;
}

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
console.log(sortArrAndMerge(a1, a2));
           
           

// palindrome

const checkPal = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 
  const reversed = cleanedStr.split("").reverse().join("");
  return reversed === cleanedStr;
 
}

console.log(checkPal("popopp"));



// anagrams

function areAnagrams(str1, str2) {
   // LISTEN SILENT are anagrams
 
  let first = str1.split("");
  first.sort((a, b) => a < b ? -1 : 1);
  first = first.join("");
 
  let second = str2.split("");
  second.sort((a, b) => a < b ? -1 : 1);
  second = second.join("");
 
  return first === second;
}

console.log(areAnagrams("listen", "silentt"));
           
           
           

// reversing string in place

const strr = "Reverse Me"

function rev(str){
  let len = str.length, temp;
  let strArr = str.split(" "); // need to do this cuz strings are immutable in JS
 
  for(let i=0; i<Math.floor(len / 2); i++){
      temp = strArr[len - i - 1];
      strArr[len - i - 1] = strArr[i];
      strArr[i] = temp;
  }
 
  return strArr.join(" ").trim();
 
}

console.log(rev(strr));


// remove duplicates
const duplicateArr = [1, 2, 3, 3, 1, 1, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 8, 8, 9];

function removeDups(arr) {
  let map = new Map();
  let output = [];
 
  arr.forEach((element) => {
     if(!map.has(element)){
       map.set(element, true);
       output.push(element);
     }
  });
 
  return output;
 
}

console.log(removeDups(duplicateArr));



//count character occurance

const stringg = "Ashish";

function countOcc(str){
  const occCount = {};
 
  for(let key of str){
    occCount[key] = (occCount[key] || 0) + 1;
  }
 
  return occCount;
}

console.log(countOcc(stringg));


// max difference in array

function findMaxDiff(arr){
  let maxDiff = 0;
  let min = arr[0];
 
  if(arr.length < 2) return 0;
 
  for(let i = 1; i<arr.length; i++){
      if(arr[i] < min){
        min = arr[i];
      }else{
        let diff = arr[i] - min;
        if(diff >= maxDiff){
          maxDiff = diff;
        }
      }
  }
 
  return maxDiff;
 
}

console.log(findMaxDiff([1, 2, 4, 6, 98, 639, 369, 99]))



// make a random string of specified length


function generate(length) {
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const charSetArr = charSet.split("");
  let randomString = "";
   
   for(let i=0; i<length; i++){
       let randomIndex = Math.floor(Math.random() * charSet.length);
       randomString += charSet.charAt(randomIndex);
   }
 
  return randomString;
}

console.log(generate(15));


// remove Falsy Values
function removeFalsyValues(array) {
    return array.filter(item => !!item);
}


// merge two arrays alternatively

function mergeArrays(array1, array2) {
  const output = [];
  const maxLen = Math.max(array1.length, array2.length);
 
  for(let i = 0; i < maxLen; i++){
    if(i < array1.length) output.push(array1[i]);
    if(i < array2.length) output.push(array2[i]);
  }
 
  return output;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))


// group By Condition (let's say odd and even)
function groupByCondition(arr, condition) {
  let group1 = [], group2 = [];
 
  arr.filter((item) => {
    if(condition(item)) group1.push(item);
    else group2.push(item);
  })
 
  return [group1, group2];
}

const arr = [1, 2, 3, 4, 5, 6];

function isEven(num){
  return num % 2 === 0 ? true : false
}

console.log(groupByCondition(arr, isEven));
