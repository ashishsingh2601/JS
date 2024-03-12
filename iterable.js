const iterator = {
    i: 0,
    next: function () {
        return {
            value: this.i,
            done: this.i++ > 5,
        }
    }
}

const iterable = {
    name: "Ashish",
    age: 24,
    [Symbol.iterator]() {
        return iterator
    }
}


