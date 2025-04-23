const Task = require("../model/Task");

const getAllTasks = async () => {
    try {
        return await Task.getAllTasks();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getTasksByUserId = async (id) => {
    return await Task.getTasksByUserId(id);
}

const getTasksByCourseId = async (id) => {
    return await Task.getTasksByCourseId(id);
}

const addTodo = async (task) => {
    return await Task.addTask(task);
}

const updateTask = async (task) => {
    return await Task.updateTask(task);
}

module.exports = { getAllTasks, getTasksByUserId, getTasksByCourseId, addTodo, updateTask };