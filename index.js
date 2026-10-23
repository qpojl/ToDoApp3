"use strict"
const form = document.getElementById("js-form");
const input = document.getElementById("js-input");
const ul = document.getElementById("ul");
const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
    todos.forEach(todo => {
        add(todo);
    });
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    add();
});

function add(todo) {
    let inputValue = input.value;
    if(todo){
        inputValue = todo;
    }
    if(inputValue){
        const li = document.createElement("li");
        li.innerText = inputValue;
        li.classList.add("list-group-item","bg-light","border-dark-subtle");
        ul.appendChild(li);
        input.value = "";
        saveData();
    } 
}

function saveData(){
    const lists = document.querySelectorAll("li");
    const todos = [];
    lists.forEach(value => todos.push(value.innerText));
    localStorage.setItem("todos",JSON.stringify(todos));
}