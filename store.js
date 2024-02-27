const store={
    todos:[
        {
            id:"1",
            title:"Do DSA",
            completed:false,
        },
        {
            id:"2",
            title:"Read Book",
            completed:true,
        },
        {
            id:"3",
            title:"Write Code",
            completed:true,
        },
    ],
};

const storeHandler={
    get(target,property){
        return target[property];
    },
    set(target,property,value){
        target[property]=value;
        if(property=="todos"){
            window.dispatchEvent(new Event("todosChange"));
        }
        return true;
    }
}

const storeProxy=new Proxy(store,storeHandler);

function addTodo(newTodo){
    storeProxy.todos=[...storeProxy.todos,newTodo];
}

function deleteTodo(id){
    storeProxy.todos=storeProxy.todos.filter(todo => todo.id !== id);
}

function toggleCompleted(id,completed){
    storeProxy.todos=storeProxy.todos.map(todo=>{
        if(todo.id===id){
            return {...todo,completed:completed}
        }
        else{
            return {...todo}
        }
    })
}
export { addTodo, deleteTodo,toggleCompleted };
export default storeProxy;