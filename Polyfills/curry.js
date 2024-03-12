// function curry(func) {
//     return function curriedFunc (...args) {
//         if(args.length >= func.length){
//             return func(...args)
//         }else {
//             return function (...next){
//                 return curriedFunc(...args, ...next);
//             }
//         }
//     }
// }



function curry (func) {
    return function curriedFunc (...args) {
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function(...next) {
                return curriedFunc(...next, ...args)
            }
        }
    }
}


const sum = (a, b, c) => a + b + c;

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3))