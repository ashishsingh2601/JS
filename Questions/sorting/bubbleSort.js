function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}


console.log(bubbleSort([1, 5, 2, 353, 4, 54, 53, 453, 321]))


// TC-> O(n**2)
// SC-> O(1)
