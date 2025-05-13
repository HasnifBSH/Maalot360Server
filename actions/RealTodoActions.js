const RealTodo = require("../model/RealTodoModel");


const getAllRealTodo = async () => {
    try {
        return await RealTodo.getAllRealTodo();
    }
    catch (e) {
        throw new Error("Error in action file");
    }
}

const getRealTodoByUserId = async (id) => {
    return await RealTodo.getRealTodoByUserId(id);
}

const addRealTodo = async (RealTodoInfo) => {
    return await RealTodo.addRealTodo(RealTodoInfo);
}
const deleteRealTodoByUserId = async (id) => {
    return await RealTodo.deleteRealTodoByUserId(id)
}
const UpdateRealTodo = async (id,UpdateRealTodoItem) => {
    console.log(UpdateRealTodoItem);
    console.log(id);
    const result=await RealTodo.UpdateRealTodo(id,UpdateRealTodoItem);
    return result;
}

module.exports = { getAllRealTodo, getRealTodoByUserId, addRealTodo, deleteRealTodoByUserId, UpdateRealTodo };