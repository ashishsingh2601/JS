// array flattner

// const arrFlat = (arr) => {
//     return arr.reduce((prev, curr) => {
//         if(Array.isArray(curr)){
//             prev = prev.concat(arrFlat(curr));
//         }else{
//             prev.push(curr);
//         }
//         return prev;
//     }, [])
// }


// console.log(arrFlat([[1,3,5,6], 4, [4, [2,[3,[90,[99],[89]]]]], 900]));



// object flattner

const objFlattener = (obj, parent) => {
    let finalobj = {};

    const flattenit = (obj, parent) => {
        for(let ele in obj){
            let newparent = parent+ele;

            if(typeof obj[ele] === "object" && typeof obj[ele] != null){
                flattenit(obj[ele], newparent+".");
            }else{
                finalobj[newparent] = obj[ele];
            }
        }

    }


    flattenit(obj, parent)

    return finalobj;
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




// const flatmyarray = (arr) => {
//     return arr.reduce((prev, curr) => {
//         if(Array.isArray(curr)){
//             prev = prev.concat(flatmyarray(curr));
//         }else{
//             prev.push(curr);
//         }
//         return prev;
//     }, [])
// }





const flatkrde = (arr) => {
    return arr.reduce((prev, curr) => {
        if(Array.isArray(curr)){
            prev = prev.concat(flatkrde(curr));
        }else{
            prev.push(curr);
        }

        return prev;
    }, [])
}

const flatobj = (obj, parent) => {
    
    let final = {};

    function flattner(obj, parent) {

        for(let key in obj){
            let newparent = parent + key;

            if(typeof obj[key] === "object" && typeof obj[key] != null){
                flattner(obj[key], newparent+".");
            }else{
                final[newparent] = obj[key];  
            }

        }
    } 


    flattner(obj, parent);
    return final;
}

flatobj(obj, "");




function debounce(fn, context, delay){
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            fn.call(context || this, args);
        }, delay);
    }
}

function throttle(fn, context, limit) {
    let throttled = false;

    return function (...args){
        if(!throttled){
            fn.apply(context || this, args);
        }
        throttled = true;

        setTimeout(() => {
            throttled = false;
        }, limit)
    }
}

Array.prototype.frEACH = function(callback) {
    for(let i=0; i<this.length; i++){
        callback(this[i]);
    }
}

Array.prototype.oncee = function(fn, context = {}) {
    let ran;

    return function (...args){
        if(fn){
            ran = fn.apply(context || null, args);
        }
        fn = null;

        return ran;
    }
}


function fib(n){
    if(n == 1 || n == 2) return 1;

    return fib(n - 1) + fib(n - 2);
}


function memoizer (fn) {
    let map = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if(map.has(key)){
            return map.get(key);
        }else{
            const result = fn.call(context || this, args);
            map.set(key, result);
            return result;
        }

    } 
}




