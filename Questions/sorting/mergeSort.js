function mergeSort(arr){

    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);

}

function merge(left, right){
    let result = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    return [...result, ...left, ...right];
}


console.log(mergeSort([1, 5, 2, 543, 13, 53, 533, 5252, 23, 422, 42, 44, 543 , 535,65, 655_54]))