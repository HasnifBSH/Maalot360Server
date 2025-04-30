const Task = require("../model/Task");

const getAll = async () => {
    try {
        return await Task.getAllFromDB();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getById = async (id) => {
    try {
        return await Task.getByIdFromDB(id);
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getByCourseId = async (id) => {
    return await Task.getByCourseIdFromDB(id);
}

const add = async (task) => {
    return await Task.addToDB(task);
}

const update = async (id, task) => {
    console.log(id+"----", task); 
    return await Task.updateInDB(id, task);
}

module.exports = { 
    getAll,
    getById,
    getByCourseId,
    add,
    update
};