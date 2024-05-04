const table = document.querySelector(".table");

table.addEventListener("click",  (e) => {
    if(e.target.tagName !== "TH") return;

    let element = e.target;

    console.log(element)

   sortGrid(element.cellIndex, element.dataset.type);

})

function sortGrid(colIdx, type){

    let tbody = document.querySelector("tbody")
    
    console.log(typeof tbody.rows);

    const rowsArr = Array.from(tbody.rows);


    switch(type){
        case "number":
            rowsArr.sort((row1, row2) => {
                return row1.cells[colIdx].textContent - row2.cells[colIdx].textContent;
            })
            break;
        case "string":
            rowsArr.sort((row1, row2) => {
                return row1.cells[colIdx].textContent < row2.cells[colIdx].textContent ? -1 : 1;
            })
    }

    rowsArr.forEach((item) => {
        tbody.appendChild(item);
    })
    // tbody.append(...rowsArr);

}