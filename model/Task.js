const db = require("../config/database");

const getAllFromDB = async () => {
    return await db.query("SELECT * FROM maalot360db.task");
}

const getByIdFromDB = async (id) => {
    return await db.query(`SELECT * FROM maalot360db.task WHERE id=${id}`);
}

const getByCourseIdFromDB = async (id) => {
    const queryString = `SELECT * FROM maalot360db.task WHERE lessonId=${id}`
    return await db.query(queryString);
}

const addToDB = async (task) => {
    const queryString = "INSERT INTO `maalot360db`.`task` (`name`, `desc`, `lessonId`, `finalDate`, `instructionsFile`, `type`)"+ 
    `VALUES( 
        '${task.name}',
        '${task.desc}',
        '${task.lessonId}',
        '${new Date().toISOString().slice(0, 19).replace('T', ' ')}',
        '${task.instructionsFile}',
        '${task.type}'
        )`;
    const result = db.query(queryString);
    task.id = result.insertId;
    console.log("---task---\n", task);
    return task;
}

const updateInDB = async (id, task) => {
    const queryString = "UPDATE `maalot360db`.`task` SET "+ 
        " `name`="+`'${task.name}',`+
        " `desc`="+`'${task.desc}',`+
        " `lessonId`="+`'${task.lessonId}',`+
        " `finalDate`="+`'${new Date().toISOString().slice(0, 19).replace('T', ' ')}',`+
        " `instructionsFile`="+`'${task.instructionsFile}',`+
        " `type`="+`'${task.type}'`+    
        " WHERE (`id`="+`'${task.id}')`;
        console.log(queryString);
    const result = await db.query(queryString);
    return task;
}

module.exports = { getAllFromDB, getByIdFromDB, getByCourseIdFromDB, addToDB, updateInDB };