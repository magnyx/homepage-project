// This is an attempt of creating a Notes thingy that should allow me to take notes and remember them.
// It is also supposed to have a "Afazeres" tab that should let me customize my day-to-day thingy

const horContainer = document.querySelector(".hor-container");
const createBtn = document.querySelector(".btn");
let hor = document.querySelectorAll(".input-box");

function showHor() {
    horContainer.innerHTML = localStorage.getItem("hor");
    reattachEventListeners();
}
showHor();

function updateStorage() {
    localStorage.setItem("hor", horContainer.innerHTML);
}

function reattachEventListeners() {
    hor = document.querySelectorAll(".input-box");
    hor.forEach(nt => {
        nt.onkeyup = function () {
            updateStorage();
        }
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./imgs/delete.png";
    horContainer.appendChild(inputBox).appendChild(img);
    reattachEventListeners();
})

horContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
       reattachEventListeners();
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        event.preventDefault();
        const br = document.createElement("br");
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        range.deleteContents();
        range.insertNode(br);
        range.setStartAfter(br);
        range.setEndAfter(br);
        selection.removeAllRanges();
        selection.addRange(range);
    }
})

showHor();