const db = require("../config/database");

const getAllFromDB = async () => {
    return await db.query("SELECT * FROM teacher");
}

const getByIdFromDB = async (id) => {
    const queryString = `SELECT * FROM teacher WHERE id=${id}`
    const teacher = await db.query(queryString);
    return teacher[0];
}

const addToDB = async (teacher) => {
    const queryString = "INSERT INTO `maalot360db`.`teacher` " +
        "(`fname`, `lname`, `address`, `email`, `phone`, `languages`, `payPerHour`, `moreDetails`, `userId`, `isActive`)" +
        `VALUES( 
        '${teacher.fname}',
        '${teacher.lname}',
        '${teacher.address}',
        '${teacher.email}',
        '${teacher.phone}',
        '${teacher.languages}',    
        '${teacher.payPerHour}',    
        '${teacher.moreDetails}',    
        '${teacher.userId}', 
        '${teacher.isActive}' 
        )`;
    console.log(queryString);
    const result = await db.query(queryString);
    teacher.id = result.insertId;
    return teacher;
}

const updateInDB = async (id, teacher) => {
    const queryString = "UPDATE `maalot360db`.`teacher` SET " +
        " `fname`=" + `'${teacher.fname}',` +
        " `lname`=" + `'${teacher.lname}',` +
        " `address`=" + `'${teacher.address}',` +
        " `email`=" + `'${teacher.email}',` +
        " `phone`=" + `'${teacher.phone}',` +
        " `languages`=" + `'${teacher.languages}',` +
        " `payPerHour`=" + `'${teacher.payPerHour}',` +
        " `moreDetails`=" + `'${teacher.moreDetails}',` +
        " `userId`=" + `'${teacher.userId}',` +
        " `isActive`=" + `'${teacher.isActive}'` +
        " WHERE (`id`=" + `'${id}')`;
    const result = await db.query(queryString);
    return result;
}

const updateForTeacherInDB = async (id, teacher) => {
    const queryString = "UPDATE `maalot360db`.`teacher` SET " +
        " `fname`=" + `'${teacher.fname}',` +
        " `lname`=" + `'${teacher.lname}',` +
        " `address`=" + `'${teacher.address}',` +
        " `email`=" + `'${teacher.email}',` +
        " `phone`=" + `'${teacher.phone}',` +
        " `languages`=" + `'${teacher.languages}',` +
        " `userId`=" + `'${teacher.userId}',` +
        " `isActive`=" + `'${teacher.isActive}'` +
        " WHERE (`id`=" + `'${id}')`;
    const result = await db.query(queryString);
    return result;
}

module.exports = { getAllFromDB, getByIdFromDB, addToDB, updateInDB, updateForTeacherInDB };