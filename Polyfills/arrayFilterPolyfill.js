Array.prototype.myFilter = function (callback) {
    const output = []
    this.forEach((element, index) => {
        if(callback(element, index, this)) output.push(element)
    })
    return output
}

console.log([1, 2, 3, 4, 5].myFilter((e) => e > 3))