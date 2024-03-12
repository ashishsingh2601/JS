const newSplit = (string, delimeter) => {
    const output = [];
    if(delimeter === '') return Array.from(string);

    const performSplit = (str, index) => {
        if(index >= string.length) return;

        const dIndex = str.indexOf(delimeter);
        if(dIndex >= 0){
            output.push(str.substring(0, dIndex))
            performSplit(str.substring(dIndex + delimeter.length), dIndex + delimeter.length);
        }else{
            output.push(str);
        }
    }

    performSplit(string, 0);
    return output;
}

console.log(newSplit("A(s'[]s-h,i=sh", ','))