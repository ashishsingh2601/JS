Array.prototype.myForEach = function (callback) {

    for(let i=0; i < this.length ; i++) {
        callback(this[i]);
    }
}

 [1,2,3].myForEach(e => console.log(e*10));






Array.prototype.newForEach = function(callback) {

    for(let i=0; i<this.length; i++) {
        callback(this[i]);
    }

}





