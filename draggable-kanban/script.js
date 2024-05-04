const tasks = document.querySelectorAll(".task");
const taskColumn = document.querySelector(".task");
const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const themeToggle = document.querySelector("#toggle-theme");


// theme toggle logic

let currentTheme = localStorage.getItem("theme") ||"light";
changeTheme();


function changeTheme() {
    const root = document.documentElement;

    switch(currentTheme){
        case "light":
            root.style.setProperty("--background-color", "#e8e8e9")
            root.style.setProperty("--color", "#393e42")
            break;
        case "dark":
            root.style.setProperty("--background-color", "#393e42")
            root.style.setProperty("--color", "#e8e8e9")
            break;
        default:
            break;
    }
}

function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";

    if(currentTheme === "light"){
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
    }else{
        moonIcon.style.display = "none";
        sunIcon.style.display = "inline-block";
        sunIcon.style.color = "#fff";
    }

    localStorage.setItem("theme", currentTheme);
    changeTheme();

}

themeToggle.addEventListener("click", toggleTheme);









// kanban logic
tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});
const columns = document.querySelectorAll(".column");

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("drop", drop);
});

let draggedTask = null;

function dragStart() {
  draggedTask = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);

// requestAnimationFrame(() => {
//     this.style.display = "none";
// })
}

function dragEnd() {
  setTimeout(() => {
    draggedTask.style.display = "block";
    draggedTask = null;
  }, 0);

}

function dragOver(event) {
  event.preventDefault();
}

function drop() {
  if (!draggedTask) return;
  this.appendChild(draggedTask);
}
