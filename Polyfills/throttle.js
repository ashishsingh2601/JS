function throttle(func, limit) {
  let flag = true;
  return function (...args) {
    if (flag) {
      func.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

function expensive() {
  console.log("Expensive");
}

window.addEventListener("scroll", throttledExpensive);

const throttledExpensive = throttle(expensive, 600);







function throttle2 (func, limit) {
    let flag = true;
    return function (...args) {
        if(flag) {
            func.apply(this, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit)
        }
    }
}


function debounce (func, delay) {
    let timer;
    return function (...args) {
        if(timer) clearInterval(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}



function throttle(func, limit){

  let throttling = false;

  return function(...args){
    if(!throttling){
        func.apply(this, args);
        throttling = true;
      setTimeout(() => {
        throttling = false;
      }, limit)
    }
  }

}




