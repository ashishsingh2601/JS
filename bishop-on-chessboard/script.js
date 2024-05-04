let board = document.querySelector("#board");

for(let i=0; i<8; i++){
    let tr = document.createElement("tr");
    let white = (i%2 == 0) ? true: false;
    
    for(let j=0; j<8; j++){
        let td = document.createElement("td");
        

        if(white){
            td.setAttribute("class", "box white");
        }else{
            td.setAttribute("class", "box black");
        }
        white = !white;

        td.setAttribute("data-index", `${i}-${j}`);
        tr.append(td);
    }

    board.append(tr);
}

board.addEventListener("mouseover", function(e) {
    console.log(e.target);


    // important, cuz without this, 
    // when you hover over borders in between cells, 
    // then, np data-index would be found and split will throw error (unable to split undefined), 
    // this happens cuz we're setting data-index attribute on td only not the whole table

    if(e.target.tagName === "td"){  
        let temp = e.target.dataset.index.split("-").map((ele) => parseInt(ele));

        let row = temp[0], col = temp[1];
        let store = {};
        let str = `${row}-${col}`;
    
        store[str] = true;
    
    
        store = findTL(row, col, store);
        store = findTR(row, col, store);
        store = findBL(row, col, store);
        store = findBR(row, col, store);
    
        let cells = document.querySelectorAll("td");
    
        for(let i=0; i<cells.length; i++){
            cells[i].classList.remove("orange");
        }
    
        for(let i=0; i<cells.length; i++){
            let curr = `${cells[i].closest("tr").rowIndex}-${cells[i].cellIndex}`;
    
            if(store[curr]){
                cells[i].classList.add("orange");
            }
    
        }
    }
 

}) 

board.addEventListener("mouseleave", function(e) {
    const cells = document.querySelectorAll("td");

    for(let i=0; i<cells.length; i++){
        cells[i].classList.remove("orange");
    }
})


function findTL(row, col, store){
    row--;
    col--;

    while(row >= 0 && col >= 0){
        store[`${row}-${col}`] = true;
        row--;
        col--;
    }

    return store;
}

function findTR(row, col, store){
    row--;
    col++;

    while(row >= 0 && col < 8){
        store[`${row}-${col}`] = true;
        row--;
        col++;
    }

    return store;
}

function findBL(row, col, store){
    row++;
    col--;

    while(row < 8 && col >= 0){
        store[`${row}-${col}`] = true;
        row++;
        col--;
    }

    return store;
}

function findBR(row, col, store){
    row++;
    col++;

    while(row < 8 && col < 8){
        store[`${row}-${col}`] = true;
        row++;
        col++;
    }

    return store;
}

