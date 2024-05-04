// map

Array.prototype.myMap = function (func) {
  let output = [];

  this.forEach((element, index) => {
    output.push(func(element, index));
  });
  return output;
};

// filter
Array.prototype.myFilter = function (func) {
  let output = [];

  this.forEach((element, index) => {
    if (func(element, index)) output.push(func(element, index));
  });
  return output;
};


//reduce
Array.prototype.myReduce = function (callback, initialVal) {
    if(!this) throw new Error("Array not defined")
    let array = this;
    let accumulator
    let index = 0;

    if(!array.length){
        if(initialVal) return initialVal
        else throw new Error("Neither array nor initialval provided")
    }    

    if(initialVal){
        accumulator = initialVal
    }else {
        accumulator = array[index++];
    }

    while(index < array.length) {
        accumulator = callback(accumulator, array[index], index, array)
        index++;
    }

    return accumulator
    
}