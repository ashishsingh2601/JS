function privateCounter () {
    let _counter = 0;

    function add (num) {
        _counter += num; 
    }

    function retrieve () {
        return _counter;
    }

    return { add, retrieve }
    
}



function privateCounter2 () {

    let _counter = 0
    function add(num) {
        _counter += num;
    }

    function getValue() {
        return _counter;
    }

return {add, getValue}

}




function privCount () {
    let _counter = 0;

    function getCount(){
        return _counter;
    }

    function setCount (num) {
        _counter += num;
    }
    return {setCount, getCount}
}

class PrivCounter {
    #count = 0;

    constructor(initialCount) {
        if(typeof initialCount === "number")
            this.#count = initialCount
    }

    setCount(num) {
        this.#count += num;
    }

    getCount() {
        return this.#count;
    }
   
}


function addi (a) {
    return function (b) {
        if(b) return addi(a + b)
        else return b
    }
}

console.log(addi(2)(3)(4)(5)(6)())



const count = new PrivCounter(3);

count.setCount(5)
count.setCount(10)
console.log(count.getCount())