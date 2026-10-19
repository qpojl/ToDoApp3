"use strict"
const form = document.getElementById("js-form");
const input = document.getElementById("js-input");
const ul = document.getElementById("ul")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    add();
});

function add() {
    const inputValue = input.value;
    if(inputValue !== ""){
        const li = document.createElement("li");
        li.innerText = inputValue;
        li.classList.add("list-group-item","bg-light","border-dark-subtle");
        ul.appendChild(li);
        input.value = "";
    } 
    
}