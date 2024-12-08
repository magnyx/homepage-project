const horContainer = document.querySelector(".hor-container");
const createBtn = document.querySelector(".btn");
let hor = document.querySelectorAll(".input-box");

function showHor(){
    horContainer.innerHTML = localStorage.getItem("hor");
}
showHor();

function updateStorage(){
    localStorage.setItem("hor", horContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    horContainer.appendChild(inputBox);
})

horContainer.addEventListener("click", function(e){
    if(e.target.tagName === "P"){
        hor = document.querySelectorAll(".input-box");
        hor.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage
            }
        })
    }
})