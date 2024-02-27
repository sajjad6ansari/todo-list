import render from "./render.js";
import store from "./store.js";
import {addTodo} from "./store.js";
import {deleteTodo} from "./store.js";

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
    const newTodo={id:crypto.randomUUID,title:todoTitle,completed:false};
    addTodo(newTodo);
});



