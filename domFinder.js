// const findPathFromChildToParent = (parent, child) => {
//     let currentChild = child;
//     const pathArr = []

//     while(currentChild !== parent){
//         const parentElement = currentChild.parentElement;
//         const childrenOfParent = Array.from(parentElement.children)
//         pathArr.push(childrenOfParent.indexOf(currentChild))
//     }
//     return pathArr;
// }


// const findNodeValue = (parent, path) => {

//     let currentEle = parent;
//     while(path.length){
//         currentEle = currentEle.children[path.pop()]
//     }
//     return currentEle.innerText
// }




















































const findPathFromChildToParent = (parent, child) => {
    let currentChild = child;

    const pathArray = []

    while(currentChild !== parent){
        const parentElement = currentChild.parentElement;
        const childrenOfCurrentParent = Array.from(parentElement.children);
        pathArray.push(childrenOfCurrentParent.indexOf(currentChild));
        currentChild = parentElement;
    }

    return pathArray;
}



const findNodeValue = (parent, path) => {
    let currentElement = parent;

    while(path.length){
        currentElement = currentElement.children[path.pop()]
    }

    return currentElement.innerText
}







const rootA = document.getElementById("rootA")
const rootB = document.getElementById("rootB")
const nodeA = document.getElementById("nodeA")

const path = findPathFromChildToParent("rootA", "nodeA")

console.log(findNodeValue("rootB", path))