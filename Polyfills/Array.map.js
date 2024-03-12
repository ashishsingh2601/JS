Array.prototype.myMap = function (callback) {
    let output = []
    this.forEach((element, index) => {
        output.push(callback(element, index, this))
    })
    return output;
}

console.log([1, 2, 3, 4, 5, 6].myMap(e => e*100));



Array.prototype.mppp = function (callback) {
    let output = [];

    this.forEach((item) => {
        output.push(callback(item, index, this));
    })

    return output;
}

Array.prototype.filterrr = function (callback) {
    let output = [];

    this.forEach((item) => {
        if(callback(item, index, this))
            output.push(item);
    });

    return output;
}





// Array.prototype.newMap = function (callback) {
//     let output = [];

//     this.forEach((item, index) => {
//         output.push(callback(item, index, this))
//     })

//     return output;
// }


Array.prototype.newFilter = function (callback) {
    let output = [];

    this.forEach((item, index) => {
            if(callback(item, index, this)) output.push(item);
    })


    return output;

}

console.log([1, 2, 3, 4, 5].newFilter((e) => e > 3))




Array.prototype.mpp = function (callback, index, array) {
    let res = []

    this.forEach((item) => {
        res.push(callback(item, index, this))
    })


    return res
}

Array.prototype.fltr = function (callback, index, array) {
    let res = []

    this.forEach((item)=> {
        if(callback(item, index, this)) res.push(item)
    })


    return res
}



Array.prototype.rdc = function (callback, initialVal) {

    let accumulator, index = 0, array = this;

    if(array.length === 0)
        return accumulator;
    if(initialVal){
        accumulator = initialVal
    }else{
        accumulator = array[index++]
    }

    while(index < array.length){
        accumulator = callback(accumulator, array[index++])
    }

    return accumulator;

}



Array.prototype.rduce = function (callback, iniVal){

    let acc, index = 0, array = this;

    if(array.length === 0){
        return acc;
    }
    if(iniVal){
        acc = iniVal;
    }else{
        acc = arr[index++];
    }

    while(index < array.length){
        acc = callback(acc, array[index++]);
    }

    return acc;
}

