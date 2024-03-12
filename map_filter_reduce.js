// map

Array.prototype.myMap = function (func) {
    let output = []

    this.forEach((element, index) => {
        output.push(func(element, index));
    })
    return output;
}

// filter
Array.prototype.myFilter = function (func) {
    let output = []

    this.forEach((element, index) => {
        if(func(element, index)) output.push(func(element, index));
    })
    return output;
}