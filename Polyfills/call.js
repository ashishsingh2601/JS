Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error("Not a function");

  context.func = this;
  context.func(...args);
};




Function.prototype.newCall = function (context = {}, ...args) {
  if(typeof this !== "function") throw new Error("Not a function")

  context.func = this;
  context.func(...args);
}


Function.prototype.newApply = function (context = {}, args = []){
  if(typeof this !== "function") throw new Error("Not a function");
  if(!Array.isArray(args)) throw new Error("invalid type");

  context.func = this;
  context.func(...args)
}



Function.prototype.newBind = functino (context = {}, ...args){
  if(typeof this !== "function") throw new Error("Not a function");

  context.func = this;
  return function (...argsAtCallTime) {
    return context.func(...args, ...argsAtCallTime)
  }
}


Function.prototype.binnnnd = (context = {}, ...args) => {
  if(typeof this !== "function") throw new Error("Not a function");

  context.func = this;
  return function(...argsAtCallTime){
    return context.func(...args, ...argsAtCallTime);
  }
}
