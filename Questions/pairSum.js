let arr = [1, 2, 4, 5, 6, 3, 7, 8];
let target = 10;

function findPairSum(arr, target) {
  let lookup = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let remaining = target - arr[i];

    if (lookup[remaining]) {
      output.push([arr[i], remaining]);
    }

    lookup[arr[i]] = true;
  }
  
  return output;
}

console.log(findPairSum(arr, target));
