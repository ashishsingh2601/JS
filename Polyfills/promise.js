// function MyPromise(executor) {
//   let onResolve,
//     onReject,
//     isFullfilled = false,
//     isRejected = false,
//     isCalled = false,
//     value;

//   function resolve(val) {
//     isFullfilled = true;
//     value = val;

//     if (typeof onResolve === "function") {
//       onResolve(val);
//       isCalled = true;
//     }
//   }

//   function reject(val) {
//     isRejected = true;
//     value = val;

//     if (typeof onReject === "function") {
//       onReject(val);
//       isCalled = true;
//     }
//   }

//   this.then = function (callback) {
//     onResolve = callback;

//     if (isFullfilled && !isCalled) {
//       isCalled = true;
//       onResolve(value);
//     }

//     return this;
//   };

//   this.catch = function (callback) {
//     onReject = callback;

//     if (isRejected && !isCalled) {
//       onReject(value);
//       isCalled = true;
//     }
//     return this;
//   };

//   try {
//     executor(resolve, reject);
//   } catch (e) {
//     console.log(e);
//   }
// }

function MyPromise(executor) {
  let onResolve,
    onReject,
    isCalled = false,
    value,
    isFullfilled = false,
    isRejected = false;

  function resolve(val) {
    isFullfilled = true;
    value = val;

    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;

    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;

    if (isFullfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    
    return this;
  };

  try {
    executor(resolve, reject);
  } catch (e) {
    console.log(e);
  }
}

const examplePromise = new MyPromise((resolve, reject) => {
  //   setTimeout(() => {
  reject(4);
  //   }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
