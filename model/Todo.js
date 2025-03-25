const db = require("../config/database");


const getAllTodos = async () => {
    return await db.query("SELECT * FROM todos");
}


const getTodosByUserId = async (id) => {
    const queryString = `SELECT * FROM todos  WHERE id=${id}`
    return await db.query(queryString);
}

const addTodo = async (todo) => {
    const queryString = `INSERT INTO todos VALUES( 
        0,    
        '${todo.title}',  
        '${new Date().toISOString().slice(0, 19).replace('T', ' ')}' , 
        0, 
        ${todo.userId} )`;

    const result = await db.query(queryString);
    todo.id = result.insertId;
    return todo;
}

module.exports = {getAllTodos, getTodosByUserId, addTodo};