const db = require("../config/database");

const getAllTasks = async () => {
    return await db.query("SELECT * FROM tasks");
}

const getTasksByUserId = async (id) => {
    const queryString = `SELECT * FROM tasks WHERE id=${id}`
    return await db.query(queryString);
}

const getTasksByCourseId = async (id) => {
    const queryString = `SELECT * FROM tasks WHERE lessonId=${id}`
    return await db.query(queryString);
}

const addTask = async (task) => {
    const queryString1 = `INSERT INTO tasks VALUES( 
        '${task.name}',
        '${task.desc}',
        '${task.lessonId}',
        '${task.finalDate}',
        '${task.instructionsFile}',
        '${task.type}',    
        0)`;
    const result = await db.query(queryString);
    task.id = result.insertId;
    return task;
}

const updateTask = async (task) => {
    const queryString1 = `UPDATE tasks SET 
        id=${task.id},
        name='${task.name}',
        desc='${task.desc}',
        lessonId='${task.lessonId}',
        finalDate='${task.finalDate}',
        instructionsFile='${task.instructionsFile}',
        type='${task.type}'    
        WHERE id=${task.id}`;
    const result = await db.query(queryString);
    task.id = result.insertId;
    return task;
}

module.exports = { getAllTasks, getTasksByUserId, getTasksByCourseId, addTask, updateTask };