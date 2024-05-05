// private counter (module pattern)

const counter = (function(){
    let _count = 0;
        
    function increment() {
         return _count += 1;
    }
    function decrement() {
         return _count -= 1;
    }
    
    function getCurrentCount() {
         return _count;
    }
    
  
    return {
      getCount: () => {
        return getCurrentCount();
      },
      incrementCount: () => {
        return increment();
      },
      decrementCount: () => {
        return decrement();
      }
    }
})()


console.log(counter.getCount());
console.log(counter.incrementCount()); 
console.log(counter.incrementCount()); 
console.log(counter.decrementCount());


    

// observer pattern

function Publisher () {
  this.observers = [];
}

Publisher.prototype = {
  subscribe: function(fn) {
      this.observers.push(fn);
  },
  
  unsubscribe: function(fnToRemove) {
      this.observers.filter((fn) => {
          return fn !== fnToRemove;
      })
  },
  
  fire: function() {
     this.observers.forEach((fn) => {
         fn();
     })
  }
}

const instance = new Publisher();

function sub1() {
  console.log("sub 1");
}

function sub2() {
  console.log("sub 2");
}

function sub3() {
  console.log("sub 3");
}

instance.subscribe(sub1);
instance.subscribe(sub2);
instance.subscribe(sub3);
instance.fire();



// Singleton

const Singleton = (function(){
    
  let pManager;
  
  function ProcessManager() {
       this.numProcess = 0;
  }
  
  function createProcessManager(){
    pManager = new ProcessManager();
    return pManager;
  }
  
  return {
    getProcessManager: () => {
      if(!pManager){
        return createProcessManager();
      }else{
        return pManager;
      }
    }
  }
  
})()


const objj1 = Singleton.getProcessManager();
const objj2 = Singleton.getProcessManager();

console.log(objj1 === objj2);
    


// factory pattern

function Developer(name){
    this.name = name;
    this.type = "Developer";
}

function Tester(name){
  this.name = name;
  this.type = "Tester";
}

function EmpFactory() {
  this.create = (name, type) => {
      switch(type){
        case 1:
          return new Developer(name);
        case 2:
          return new Tester(name);
      }
  }
  
}

const employeeFactory = new EmpFactory();
const employees = [];


employees.push(employeeFactory.create("Ashish", 1));
employees.push(employeeFactory.create("Singh", 2));

employees.forEach((emp) => {
  console.log(emp);
})