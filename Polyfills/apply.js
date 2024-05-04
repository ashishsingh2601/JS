Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") throw new Error("Not a function");

  if (!Array.isArray(args))
    throw new TypeError("Invalid type, should be array");

  context.func = this;
  context.func(...args);
};



Function.prototype.cll = function (context = {}, ...args) {
  if(typeof this !== "function") throw new Error("Not a function")

  context.func = this
  context(...args)
}


Function.prototype.aply = function (context = {}, args = []) {
  if(typeof this !== "function"){
    throw new Error("Not a function")
  }

  if(typeof args !== "object" && typeof args !== null) throw new Error("Invalid type")

  context.func = this
  context(...args)
}

Function.prototype.bnd = function (context = {} , ...args) {

  if(typeof this !== "function"){
    throw new Error("Not a function")
  }

  context.func = this
  return function (...argsAtCallTime) { 
    context(...argsAtCallTime, ...args)
  }
}





Function.prototype.callll = (context = {}, ...args) => {
  if(typeof this != "function"){
    throw new Error("Error");
  }

  context.fn = this;
  context.fn(...args);
}

Function.prototype.applyyy = (context = {}, args = []) => {
  if(typeof this != "function"){
    throw new Error("Error!");
  }

  if(!Array.isArray(args)){
    throw new TypeError("Mismatch");
  }

  context.fn = this;
  context.fn(...args);
}


Function.prototype.bind = (context = {}, ...args) => {
  if(typeof this != "function"){
    throw new Error("Error!");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  }

}


Array.prototype.mapppp = (cb) => {
  let out = [];

  this.forEach((item) => {
    out.push(cb(item, index, this));
  })

  return out;
}



Array.prototype.filterrr = (cb) => {
  let out = [];

  this.forEach((item) => {
    if(cb(item, index, this)) out.push(item);
  })

  return out;
}

Array.prototype.reduceeee = (cb, init) => {
  let acc = 0, idx = 0;

  if(init) acc = init;
  else acc = this[idx++];

  while(idx < this.length){
    acc = cb(acc, this[idx++]);
  }

  return acc;
}


