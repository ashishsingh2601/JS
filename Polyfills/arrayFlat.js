const arr = [1, 2, [3, 4], 5, 6];

// function newFlatner(arr, depth = 1) {
//   let result = [];

//   arr.forEach((arItem) => {
//     if (Array.isArray(arItem) && depth > 0) {
//       result.push(...newFlatner(arItem, depth - 1));
//     } else {
//       result.push(arItem);
//     }
//   });

//   return result;
// }





function flatter (arr, depth = 1) {
  let result = [];

  arr.forEach((item) => {
    if(Array.isArray(item)){
      result.push(...flatter(item, depth = depth - 1))
    }else{
      result.push(item);
    }
  })


  return result;
}


console.log(flatter(arr));
