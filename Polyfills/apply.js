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

