Function.prototype.myBind = function (context = {}, ...args) {
    if(typeof this !== "function")
        throw new Error("Error");

    context.func = this;
    return function (...argsAtCallTime) {
        return context.func(...args, ...argsAtCallTime)
    }
}

