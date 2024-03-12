function myPromiseAll([...promises]) {
  let result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) resolve(result);
      }).catch((err) => reject(err));
    });
  });
}

myPromiseAll([Promise.resolve("hi", 300), Promise.reject("hey")])
  .then((val) => console.log(val))
  .catch((err) => {
    throw new TypeError(err);
  });


  
function promiseALL([...promises]) {
  let result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) resolve(result);
      }).catch((err) => reject(err));
    });
  });
}

promiseALL([Promise.resolve("hi"), Promise.reject("bye!")])
  .then((res) => console.log(res))
  .catch((err) => {
    throw new Error(err);
  });



  function proall ([...promises]) {

    let result = [];

    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
          p.then((res) =>  {result.push(res);
            if(index >= promises.length) resolve(result)}
          ).catch((err) => reject(err))
          
        })
    })

  }