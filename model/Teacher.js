const db = require("../config/database");

const getAllFromDB = async () => {
    return await db.query("SELECT * FROM teacher");
}

const getByIdFromDB = async (id) => {
    const queryString = `SELECT * FROM teacher WHERE id=${id}`
    return await db.query(queryString);
}

const getByCourseIdFromDB = async (id) => {
    const queryString = `SELECT * FROM teacher WHERE lessonId=${id}`
    return await db.query(queryString);
}

const addToDB = async (teacher) => {
    const queryString1 = `INSERT INTO teacher VALUES( 
        '${teacher.fname}',
        '${teacher.ldesc}',
        '${teacher.address}',
        '${teacher.email}',
        '${teacher.phone}',
        '${teacher.languages}',    
        '${teacher.payPerHour}',    
        '${teacher.moreDetails}',    
        '${teacher.userId}', 
        '${teacher.isActive}',   
        )`;
    const result = await db.query(queryString);
    teacher.id = result.insertId;
    return teacher;
}

const updateInDB = async (id, teacher) => {
    const queryString1 = `UPDATE teacher SET 
        id=${id},
        fname='${teacher.fname}',
        lname='${teacher.lname}',
        address='${teacher.address}',
        email='${teacher.email}',
        phone='${teacher.phone}',
        languages='${teacher.languages}'    
        payPerHour='${teacher.payPerHour}'    
        moreDetails='${teacher.moreDetails}'    
        userId='${teacher.userId}'    
        isActive='${teacher.isActive}'    
        WHERE id=${teacher.id}`;
    const result = await db.query(queryString);
    return teacher;
}

module.exports = { getAllFromDB, getByIdFromDB, getByCourseIdFromDB, addToDB, updateInDB };