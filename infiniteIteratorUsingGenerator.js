function* generator () {
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

let g = generator();
console.log(g.next())
console.log(g.next())
console.log(g.next())

function createID (id) {
    console.log(id.value)
}

createID(g.next())