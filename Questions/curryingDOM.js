function domManipulator (id) {
    return function (content) {
        return document.querySelector("#"+id).textContent = content;
    }
}

const yourContent = domManipulator("child__element")


yourContent("Content")
