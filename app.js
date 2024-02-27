import render from "./render.js";
import store from "./store.js";
import {addTodo} from "./store.js";
import {deleteTodo} from "./store.js";
import {toggleCompleted} from "./store.js";

// handling states by rending each user try to set something in todos
window.addEventListener("todosChange",()=>{
    render();
});

// initial render
render();

const form=document.querySelector('#form');

const todoTitleInput=document.querySelector(".todo-title-input");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const todoTitle=todoTitleInput.value;
    const newTodo={id:crypto.randomUUID(),title:todoTitle,completed:false};
    addTodo(newTodo);
    todoTitleInput.value="";
});

const todos=document.querySelector(".todos");

todos.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-todo-button")){
        const li=e.target.closest('.todo');
        // const li=e.target.parentNode.parentNode;
        const id =li.dataset.id;
        deleteTodo(id);
    }
});

// change event fired when checkbox checked or unchecked
todos.addEventListener("change",(e)=>{
    if(e.target.classList.contains("todo-checkbox")){
        const li=e.target.closest('.todo');
        // const li=e.target.parentNode.parentNode;
        const id =li.dataset.id; 
        const completed=e.target.checked;
        toggleCompleted(id,completed);
    }
})
