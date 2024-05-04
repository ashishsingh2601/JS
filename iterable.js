// const iterator = {
//     i: 0,
//     next: function () {
//         return {
//             value: this.i,
//             done: this.i++ > 5,
//         }
//     }
// }

// const iterable = {
//     name: "Ashish",
//     age: 24,
//     [Symbol.iterator]() {
//         return iterator
//     } 
// }


// implement range

let range = {
    start: 0,
    end: 5,
    [Symbol.iterator]() {
        let i = this.start;
        let j = this.end;

        return {
            next: function () {
                return {
                    value: i,
                    done: i++ > j, 
                }
            }
        }
    }
}

// for(let key of range){
//     console.log(key);
// }

console.log(...range);