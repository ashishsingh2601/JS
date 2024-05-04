// return 1st promise that resolves / rejects from an array of promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1")
    }, [1000]);
  })
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise2");
    }, [900]);
  })
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise3");
    }, [600]);
  })
  
  const promises = [promise1, promise2, promise3];
  
  
  const firstPromiseResolver = (promises) => {
    
    if(!Array.isArray(promises)){
      throw new TypeError("Invalid Input");
    }
    
    let hasResolved = false;
      
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((data) => {
                if(!hasResolved){
                  resolve(data);
                  hasResolved = true;
                }
            }).catch((err) => {
                reject(err);
            });
        })
    })
  }
  
  const returnedPromise = firstPromiseResolver(promises);
  
  returnedPromise.then((data) => {
      console.log(data);
  }).catch((err) => {
    console.error(err);
  })
  
  
  
  