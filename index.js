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
        inputValue = todo.text;
    }
    if(inputValue){
        const li = document.createElement("li");
        const liNodeContainer = document.createElement("div");
        liNodeContainer.classList.add("d-flex","justify-content-between");
        const textContainer = document.createElement("div");
        textContainer.classList.add("todo-text");

        if (todo && todo.completed){
            textContainer.classList.add("text-decoration-line-through");
        }

        const deleteButton = document.createElement("input");
        deleteButton.type = "button";
        deleteButton.value = "Delete";
        deleteButton.id = "deleteButton"
        deleteButton.classList.add("btn","btn-outline-danger");

        deleteButton.addEventListener("click",()=>{
        li.remove();
        saveData();
        })

        textContainer.innerText = inputValue;
        liNodeContainer.appendChild(textContainer);
        liNodeContainer.appendChild(deleteButton);
        li.appendChild(liNodeContainer);
        li.classList.add("list-group-item","bg-light","border-dark-subtle");

        li.addEventListener("click",()=>{
            textContainer.classList.toggle("text-decoration-line-through");
            saveData();
        });

        ul.appendChild(li);
        input.value = "";
        saveData();
    } 
}

function saveData(){
    const lists = document.querySelectorAll("li");
    const todos = [];
    lists.forEach(value => {
        const textContainer = value.querySelector(".todo-text");
        const todo = {
            text : textContainer.innerText,
            completed : textContainer.classList.contains("text-decoration-line-through")
        }
        todos.push(todo);
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}