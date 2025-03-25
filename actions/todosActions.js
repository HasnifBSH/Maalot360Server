const Todo = require("../model/Todo");


const getAllTodos =async ()=>{
    try{
        return await Todo.getAllTodos();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getTodosByUserId = async (id)=>{
    return await Todo.getTodosByUserId(id);
}

const addTodo = async (todo)=>{
    return await Todo.addTodo(todo);
}

module.exports = {getAllTodos, getTodosByUserId, addTodo};