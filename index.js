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
        const liNodeContainer = document.createElement("div");
        liNodeContainer.classList.add("d-flex","justify-content-between");
        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.id = "deleteButton"
        deleteButton.classList.add("btn","btn-outline-danger");

        deleteButton.addEventListener("click",()=>{
        li.remove();
        saveData();
        })

        liNodeContainer.innerText = inputValue;
        liNodeContainer.appendChild(deleteButton);
        li.appendChild(liNodeContainer);
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