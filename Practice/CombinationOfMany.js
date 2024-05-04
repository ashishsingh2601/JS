// Array.prototype.myreduce = function (cb, init) {
//    let acc, idx = 0;
  
//   if(init){
//     acc = init;
//   }else{
//       acc = this[idx++];
//   }
  
//   while(idx < this.length){
//     acc = cb(acc, this[idx++]);
//   }
  
//   return acc;
  
// }


// const arr = [1, 2, 3, 4];
// console.log(arr.myreduce((acc, curr) => {return acc + curr;}, 0))


// ----- module pattern ------
// let module = (function () {
    
//     const inner = () => {
//       console.log("inner");
//     }
  
//     return {
//       outer: () => {
//         inner();
//       }
//     }
  
// })()
// console.log(inner()); -> error
// console.log(module.outer()); -> prints inner


// function func1 () {
  
//      for(var i=0; i<5; i++){
//         setTimeout(() => {
//           console.log(i);
//         }, 1000);
//   }
// }

// func1();


// function func() {
//   for (var i = 0; i < 5; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, 1000);
//     }
//    inner(i);
//   }
// }

// func();



// private counter (also module pattern)

// function counter () {
//      let _counter = 0;
  
//       function addVal (val) {
//           _counter += val;
//       }
  
//       function getValue() {
//         return "Value: " + _counter;
//       }
  
//       return {
//         add: (val) => {
//           return addVal(val);
//         },
//         retrieve: () => {
//          return getValue();
//         }
//       }
// }


// let instance = counter();
// instance.add(5);
// instance.add(10);
// console.log(instance.retrieve());


// make run only once
// function caller () {
//   let callCount = 0;
  
//   return function () {
//     if(callCount > 0){
//       console.log("Already called")
//     }else{
//       console.log("Called first time!"); 
//       callCount++;
//     }
//   }
// }

// const isAlreadyCalled = caller();
// isAlreadyCalled();
// isAlreadyCalled();
// isAlreadyCalled();


// once polyfill

// function once (func, context) {
//     let ran;
    
//     return function () {
//       if(func){
//         ran = func.apply(context || this, arguments);
//         func = null;
//       }
//       return ran;
//     }
// }


// const kingdom = {
//   king: () => {
//     console.log("But i am king!");
//   }
// }
// const func1 = once(kingdom.king, kingdom);

// func1();
// func1();
// func1();


// memoize polyfill (memoizer)


// //decorator pattern
// //memoizer

// function heavy(x){
//   console.log(x + ": heavy");
// }


// // const memoizer = (fn) => {
    
// //   const map = new Map();
  
// //   return function (x){       
// //     if(map.has(x)){
// //       return map.get(x);
// //       }else{
// //         const result = fn(x)
// //         map.set(x, result)
// //         return result
// //     }
// //   }
// // }

// // const memoizedHeavy = memoizer(heavy);
// // memoizedHeavy(6);
// // memoizedHeavy(9);
// // memoizedHeavy(6);


// memoize polyfill (memoizer) / caching functionality

// function heavy(num1, num2){
  
//   for(let i = 0; i<1000000000; i++) {}
  
//   return num1 * num2;
  
// }

// function memoizer(fn, context) {
//   const map = new Map();
  
//   return function (...args) {
//       const key = JSON.stringify(args);
//       if(map.has(key)){
//         return map.get(key);
//       }else{
//         const result = fn.call(context || this, ...args);
//         map.set(key, result);
//         return result;
//       }
//   }
// }

// const memoizedHeavy = memoizer(heavy, this);


// console.time("First:");
// console.log(memoizedHeavy(3, 6));
// console.timeEnd("First:");

// console.time("Second:");
// console.log(memoizedHeavy(3, 6));
// console.timeEnd("Second:");


// memoize / optimize fibonacci

const fib = (n) => {
    // base case
    if(n == 1 || n == 2) return 1;
   
    return fib(n-1) + fib(n-2);
 }
 
 // const memoizer2 = (fn, context) => {
 //    const map = new Map();
   
 //   return function (...args) {
 //     const key = JSON.stringify(args);
 //     if(map.has(key)){
 //       return map.get(key);
 //     }else{
 //       const result = fn.call(context || this, ...args);
 //       map.set(key, result);
 //       return result;
 //     }
     
 //   }
   
 // }
 
 // const memoizedFib = memoizer2(fib, this)
 
 // console.time("First:");
 // console.log(memoizedFib(45));
 // console.timeEnd("First2:");
 
 // console.time("Second:");
 // console.log(memoizedFib(45));
 // console.timeEnd("Second2:");
 
 // //debounce
 
 
 // const debounce = (fn, time) => {
 //   let id = null;
 //    return function (x) {
 //      if(id){
 //        clearTimeout(id)
 //      }
 //      id = setTimeout(() => {fn(x); id = null;}, time);
      
 //    }
 // }
 
 // const deboucedHeavy = debounce(heavy, 3000);
 // deboucedHeavy(3)
 // deboucedHeavy(3)
 // deboucedHeavy(3)
 // deboucedHeavy(3)
 // deboucedHeavy(3)
 // deboucedHeavy(3)
 
 
 // curry sum(2)(6)(1)
 // function sum (a) {
 //   return function (b){
 //     return function (c){
 //       return a + b + c;
 //     }
 //   }
 // }
 
 // const sum = a => b => c => a + b + c;
 // console.log(sum(2)(6)(1));
 
 
 //infinite currying
 
 // function sum (a) {
 //   return function (b){
 //     if(b) return sum(a + b);
 //     return a;
 //   }
 // }
 
 
 // console.log(sum(2)(6)(1)(3)(3)(9)(99)());
 
 
 
 // real world example currying
 
 // function urlMaker(protocol){
 //   return function (domain){
 //     return function (path){
 //       return `${protocol}://${domain}/${path}`;
 //     } 
 //   }
 // }
 
 // const domainName = urlMaker("https")
 // const giveMePath = domainName("www.ashish.best")("sde")
 // console.log(giveMePath);
 
 
 // curry polyfill
 
 // function curry (fn) {
 //   return function curriedFunc(...args){
 //       if(args.length >= fn.length){
 //         return fn(...args);
 //       }else{
 //         return function (...next){
 //           return curriedFunc(...args, ...next);
 //         }
 //       }
 //   }
 // }
 
 
 // const sum = (a, b, c, d) => a + b + c + d;
 
 // const curriedSum = curry(sum);
       
 // console.log(curriedSum(1)(2)(3)(9));
 
 
 
 // class
 
 // class Property {
 //   constructor(name){
 //     this.name = name;
 //   }
 //   owner = 'Ashish';
   
 //   getName = () => {      // enumerable
 //     return this.name;
 //   }
 // }
 
 // class PValue extends Property {
 //   constructor(name, length, breadth){
 //     super(name);
 //     this.length = length;
 //     this.breadth = breadth;
 //     this.area = length * breadth;
 //   }
   
 //   getPrice () {          // non - enumerable
 //     return this.area * 9;
 //   }
 // }
 
 // const pty = new PValue("My house", 100, 100);
 // // console.log(pty.getName(), pty.area, pty.getPrice(), pty.owner);
 
 // for(let x of Object.entries(pty)){
 //   console.log(x)
 // }
 
 
 
 
 
 // var l = 4;
 // function cb(){
 //   console.log(this.l);
 // }
 
 // const obj = {
 //   l:5,
 //   method(fn){
 //     fn();
 //   }
 // }
 
 // obj.method(cb);
 
 
 
 
 // const user = {
  
 // }
 //  user.g = f.bind(user);
 
 // function f(){
 //   console.log(this);
 // }
 
 
 // user.g();
 
 
 // call polyfill
 
 // Function.prototype.mycall = function (context = {}, ...args) {
 //   if(typeof this !== "function"){
 //     throw new Error("Not callable! Call only on functions bro");
 //   }
   
 //   context.fn = this;
 //   context.fn(...args);
 // }
 
 // Function.prototype.myapply = function(context={}, args){
 //   if(typeof this !== "function"){
 //     throw new Error("Not callable! Call only on functions bro");
 //   }
     
 //   if(!Array.isArray(args)){
 //     throw new TypeError("Array required, it's apply bro")
 //   }
   
 //   context.fn = this;
 //   context.fn(...args);
 // }
 
 // Function.prototype.bind = function(context={}, ...args){
 //   if(typeof this !== "function"){
 //     throw new Error("callable on function");
 //   }
   
 //   context.fn = this;
 //   return function (...newArgs) {
 //     return context.fn(...args, ...newArgs); 
 //   }
 // }
 
 
 
 // DOM traversal
 // getElementById()
 // getElementByClassName()
 // querySelector()
 // querySelectorAll();  // returns array (iterable)
 
 // {selectedElement}.style.{cssProperty} = "cksdncks"
 
 // children  // returns object (enumerable) use Array.from() to convert to iterable
 
 // parent
 // parentElement
 
 // nextElementSibling
 // previousElementSibling
 
 // closest()
 
 
 //Event Delegation
 // Way 1
 document.addEventListener("click", e => {
   if(e.target.matches("div")){
     console.log("clicked div!"); 
   }
 })
 
 // Way 2
 addGlobalEventListener("div", e => {
   console.log("clicked div!")
 }, "div");
 
 function addGlobalEventListener(eventType, callback, elementType){
   document.addEventListener(eventType, e => {
     if(e.target.matches(elementType)) callback(e);
   })
 }
 
 // Way 1 and Way 2 are identical (Way 2 is generic)
 
 
 
 
 // DOM finder
 const getPathFromNodeToRoot = (child, parent) => {
     const currentNode = child;
     const path = []
     
     while(currentNode != parent){
        const parentElement = currentNode.parentElement;
        const  childrenArray = Array.from(parentElement.children);
        path.push(childrenArray.indexOf(currentNode));
        currentNode = parentElement;
     }
    return path;
 }
 
 
 const getMissingNodeValueByTraversingFromRootToNode = (parent, path) => {
   const currentElement = parent;
   
   while(path.length){
     currentElement = currentElement.children[path.pop()];
   }
   
   return currentElement.innerText;
 }
 
 const findNodeValue = () => {
   const nodeA = document.getElementById("nodeA");
   const rootA = document.getElementById("rootA");
   
   const rootB = document.getElementById("rootB");
 //   nodeB? find it 
  
   const path = getPathFromNodeToRoot(nodeA, rootA);
   return getMissingNodeValueByTraversingFromRootToNode(rootB, path);
 }
 
 findNodeValue()
 
 
 
 // flatten the array 
 // const arrayFlattner = (arr) => {
 //    return arr.reduce((prevVal, currVal) => {
 //        if(Array.isArray(currVal)){
 //          prevVal = prevVal.concat(arrayFlattner(currVal));
 //        }else{
 //          prevVal.push(currVal);
 //        }
 //      return prevVal;
 //    }, []);
 // }
 
 // const array = [[2,3,[3, 4]], 2, [[[[6, 9], 10], ], 123], [424]]
 // console.log(arrayFlattner(array));
 
 
 
 // Object flattner
 
 const objFlattener = (obj, parent) => {
   const finalObj = {};
   const performFlattening = (obj, parent) => {
       for(let key in obj){
         let newParent = parent + key;
         
         if(typeof obj[key] === "object" && typeof obj[key] != null){
           performFlattening(obj[key], newParent+".");
         }else{
           finalObj[newParent] = obj[key];
         }
       }
   }
   
   performFlattening(obj, parent);
   return finalObj;
 }
 
 const obj = {
   a: "1",
   b: {
     c: {
       d: {
         h: "@",
       },
       e: "2"
     },
     f: "3",
   },
   g: "4",
 }
 
 console.log(objFlattener(obj, ""));
 
 
 
 // Polyfill of array.split
 
 const stringsplitter = (string, del) => {
     let output = [];
     if(del === " ") return Array.from(string);
   
     function splitter (str, i) { 
       if(i > str.length) return;
       
       let dIndex = str.indexOf(del);
       
       if(dIndex >= 0){
         output.push(str.substring(0, dIndex));
         splitter(str.substring(dIndex + del.length), dIndex + del.length);
       }else{
         output.push(str);
       }
       
     }
   
     splitter(string, 0);
     return output;
 }
 
 const str = "A,bfnsdkf,oep,ejs,xi,sk,e,x,sn,xjw";
 
 console.log(stringsplitter(str, ","));
 
 
 // Implementation of Task Scheduler
 
 
 const removeIdFromDeps = (schedules, id) => {
     schedules.forEach((schedule) => {
       let index = schedule.indexOf(id);
       if(index != -1) schedule.del.splice(index, 1);
     })
     
 }
 
 const taskScheduler = (schedules) => {
   const totalTasks = schedules.length;
   let currentTask = 0;
   let tasksExecuted = 0;
   
   while(tasksExecuted < totalTasks){
       let task = schedules[currentTask];
       if(!task.dep.length && !task.executed){
         tasksExecuted += 1;
         task.executed = true;
         removeIdFromDeps(schedules, task.id);
       }else if(!task.visited){
         task.visited = 1;
       }else if(task.visited > totalTasks){
         throw new Error("Cyclic Dependency Exists :o")
         break;
       }else task.visited += 1;
     
     if(currentTask < totalTasks - 1){  // cuz currentTask stores indices
       currentTask = 0;
     }else currentTask += 1;
   }
   
 }
 
 const schedules = [
   {"id": "a", dep: ["b", "c"]},
   {"id": "b", dep: ["c"]},
   {"id": "c", dep: []},
 ]
 
 console.log(taskScheduler(schedules));


 // Throttle Polyfill

function task (){



    console.log("Task");
}

const myThrottle = (cb, delay) => {
    let lastCallTime = 0;

    return (...args) => {
        let currentCallTime = new Date().getTime();
        if(currentCallTime - lastCallTime < delay) return;
        else{
            lastCallTime = currentCallTime;
            return cb(...args);
        }
    }
}



const throttledTask = 