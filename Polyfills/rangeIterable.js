const range = {
    start: 0,
    end: 5,
    [Symbol.iterator]() {
        let i = this.start;
        let j = this.end;
        return {
            
            next() {
                return {
                    value: i,
                    done: i++ > j,
                }
            }
        }
    }
}

console.log([...range])
for(let r of range) console.log(r)

const arr = [1, 2, 3]
const iter = arr[Symbol.iterator]()
console.log(iter.next())