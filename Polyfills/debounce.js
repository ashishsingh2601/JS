function debounce (func, delay) {
    let timeout;
    return function (...args) {
        if(timeout) clearTimeout(timeout);
  
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
  }
  
  function fetchResults (query)  {
    console.log("Query:", query)
  }
  
  
  const debouncedFetchResults = debounce(fetchResults, 600);
  
  
  const element = document.getElementById("searchInput");
  element.addEventListener('keyup', (e) => {
    let query = e.target.value;
    debouncedFetchResults(query)
  })



  function debounce2 (func, delay) {
    let timer;
    return function (...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}


function debounce3 (func, delay) {
  let timeout;

  return function(...args) {
    if(timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}


function throttle (func, limit) {
  let flag = false;
  return function (...args) {
    if(!flag){
      func.apply(this, args)
      flag = true;

      setTimeout(() => {
        flag = false;
      }, limit)
    }
  }
}


const throttle = (fn, context, limit) => {
  let throttled = false;

  return function (...args) {
    if(!throttled){
      fn.call(context || this, ...args);
      throttled = true;
      
      setTimeout(() => {
        throttled = false;
      }, limit)
      
    }
  } 
}


function deb (func, delay) {
  let timeout =  0;

  return function (...args) {
    if(timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

function throt (func, limit) {

  let flag = false

  return function (...args) {
    if(!flag) func.apply(this, args)
    flag = true;

    setTimeout(() => {
      flag = false;
    }, limit)
  }


}


function debounce (func, delay) {

  let timeout;

  return function debFunc (...args) {
    if(timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}



function throttle (func, limit) {
  let isThrottled = false;

  return function thrFunc(...args){
    if(!isThrottled) func.apply(this, args)
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false
    }, limit)
  }
}



Array.prototype.fEach = function (callback) {

  for(let i=0; i<this.length; i++){
    callback(this[i]);
  }
  
}




const debounce = (fn, context, delay) => {
  let timer;

  return function (...args) {
    if(timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn.call(context || this, ...args);
    }, delay)


  }

}