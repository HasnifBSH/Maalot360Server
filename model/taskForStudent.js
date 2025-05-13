const db = require("../config/database");

const getAllFromDB = async () => {
    return await db.query("SELECT * FROM maalot360db.taskForStudent");
}

const getByIdFromDB = async (id) => {
    const queryString = `SELECT * FROM maalot360db.taskForStudent WHERE id=${id}`
    return await db.query(queryString);
}

const getByTaskIdFromDB = async (id) => {
    console.log(id);
    const queryString = `SELECT * FROM maalot360db.taskForStudent WHERE taskId=${id}`
    return await db.query(queryString);
}

const getByStudentIdFromDB = async (id) => {
    const queryString = `SELECT * FROM maalot360db.taskForStudent WHERE studentId=${id}`
    return await db.query(queryString);
}

const addToDB = async (taskForStudent) => {
    const queryString = "INSERT INTO `maalot360db`.`taskForStudent` " +
        "(`taskId`, `studentId`, `studentName`, `fileName`, `content`, `url`, `status`, `grade`, `descriptionGrade`)" +
        `VALUES( 
        '${taskForStudent.taskId}',
        '${taskForStudent.studentId}',
        '${taskForStudent.studentName}',
        '${taskForStudent.fileName}',
        '${taskForStudent.content}',
        '${taskForStudent.url}',
        '${taskForStudent.status}',
        '${taskForStudent.grade}',
        '${taskForStudent.descriptionGrade}'
        )`;
    console.log(queryString);
    const result = await db.query(queryString);
    taskForStudent.id = result.insertId;
    return taskForStudent;
}

const updateGradeInDB = async (id, grade) => {
    const queryString = "UPDATE `maalot360db`.`taskForStudent` SET" +
        " `grade`=" + `'${grade}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    console.log(result);
    return result;
}

// const updateInDB = async (id, taskForStudent) => {
//     const queryString = "UPDATE `maalot360db`.`taskForStudent` SET"+ 
//         " `id`="+`'${id}',`+
//         " `taskId`="+`'${taskForStudent.taskId}',`+
//         " `studentId`="+`'${taskForStudent.studentId}',`+
//         " `studentName`="+`'${taskForStudent.studentName}',`+
//         " `fileName`="+`'${taskForStudent.fileName}',`+
//         " `content`="+`'${taskForStudent.content}',`+
//         " `url`="+`'${taskForStudent.url}',`+
//         " `status`="+`'${taskForStudent.status}',`+
//         " `grade`="+`'${taskForStudent.grade}',`+
//         " `descriptionGrade`+="+`'${taskForStudent.descriptionGrade}'`+
//         " WHERE (`id`="+`'${id}')`;
//     return await db.query(queryString);
// }

module.exports = { getAllFromDB, getByIdFromDB, getByTaskIdFromDB, getByStudentIdFromDB, addToDB, updateGradeInDB };