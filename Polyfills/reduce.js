// Array.prototype.myReduce = function (callback, initialVal) {
//     if(!this) throw new Error("Array not defined")
//     let array = this;
//     let accumulator
//     let index = 0;

//     let n = array.length

//     if(!n){
//         if(initialVal) return initialVal;
//         else throw new Error("Neither array nor initial value provided")
//     }

//     if(initialVal){
//         accumulator = initialVal
//     }else{
//         accumulator = array[index++];
//     }    

//     while(index < n){
//         accumulator = callback(accumulator, array[index])
//         index++;
//     }

//     return accumulator

// }









Array.prototype.newReduce = function (callback, initVal) {
    let accumulator, index = 0, array = this;


    if(!array.length) return initVal;
    if(initVal){
        accumulator = initVal;
    }else{
        accumulator = array[index++];
    }

    while(index < array.length){
        accumulator = callback(accumulator, array[index++])
    }

    return accumulator
}


const arr = [1, 2, 3]
const init = 3
const callback = (prev, curr) => { return prev+curr}

console.log(arr.newReduce(callback, init))