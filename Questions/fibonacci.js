//using decorator pattern

function fibo(n){
    if(n === 1 || n === 2) return 1;
    return fibo(n-1) + fibo(n-2);
}

function memoizer(fn) {

    let cache = {}
    console.log(cache)
    return function(n){
        if(n in cache) {
            return cache[n];
        }
        else {
            cache[n] = fn.call(this, n)
        }
        return cache[n];
    }
}

const result = memoizer(fibo)
console.log(result(39))

// const fib = (n) => {
//     let cache = {}
//     if(n<=2) return 1;

//     if(n in cache) return cache[n];
//     cache[n] = fib(n-1) + fib(n-2);
//     return cache[n];

// }

// console.log(fib(39))