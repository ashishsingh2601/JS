let object1 = new Object();

const object2 = {

}

let obj3 = Object.create(null)


function Person (name, age) {
    this.name = name;
    this.age = age;
}

const obj4 = new Person("Ashish", 24)



class Student {
    constructor(name){
        this.name = name
    }
}

const obj5 = new Student("Ashish")



// Shallow
=
Object.create
Object.assign(target, source)

// Deep
JSON.parse(JSON.stringify(obj)) 
"... - only upto 1 level deep" 
structuredClone()