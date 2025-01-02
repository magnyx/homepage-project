// This is an attempt of creating a Notes thingy that should allow me to take notes and remeber them.
// It is also supposed to have a "Horários" tab that should let me customize my day-to-day thingy

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

//Now we will attempt to make the Day change automatically

// Playtime

let day = document.querySelector(".day");
day = "02";
console.log(day);