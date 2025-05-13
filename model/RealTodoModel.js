const db = require("../config/database");

//getAll()
const getAllRealTodo = async () => {
    return await db.query("SELECT * FROM maalot360db.realTodo");
}

//getById()
const getRealTodoByUserId = async (id) => {
    const queryString = `SELECT * FROM maalot360db.realTodo  WHERE id=${id}`
    return await db.query(queryString);
}


//add()
const addRealTodo = async (RealTodoItem) => {
    const queryString = "INSERT INTO maalot360db.realTodo (`createdDate`, `description`, `isCompleted`, `ownerId`, `userId`)" + ` VALUES(     
        '${RealTodoItem.createdDate}', 
        '${RealTodoItem.description}', 
        '${RealTodoItem.isCompleted}', 
        '${RealTodoItem.ownerId}', 
        '${RealTodoItem.userId}'       
 )`;
    const result = await db.query(queryString);
    RealTodoItem.id = result.insertId;
    return RealTodoItem;
}

//delete()
const deleteRealTodoByUserId = async (id) => {
    const queryString = `DELETE FROM maalot360db.realTodo WHERE id=${id}`;
    console.log(queryString);
    
    return await db.query(queryString);
}

//update()


const UpdateRealTodo = async (id, RealTodoItem) => {
    console.log(RealTodoItem);
    
    const queryString = "UPDATE `maalot360db`.`realTodo` SET" +
        " `createdDate`=" + `'${RealTodoItem.createdDate}',` +
        " `description`=" + `'${RealTodoItem.description}',` +
        " `isCompleted`=" + `'${RealTodoItem.isCompleted}',` +
        " `ownerId`=" + `'${RealTodoItem.ownerId}',` +
        " `userId`=" + `'${RealTodoItem.userId}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}



module.exports = { getAllRealTodo,getRealTodoByUserId ,addRealTodo ,deleteRealTodoByUserId,UpdateRealTodo};