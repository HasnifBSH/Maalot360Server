const db = require("../config/database");

const getAllTeachers = async () => {
    return await db.query("SELECT * FROM teachers");
}

const getTeachersById = async (id) => {
    const queryString = `SELECT * FROM teachers WHERE id=${id}`
    return await db.query(queryString);
}

const getTeacherByCourseId = async (id) => {
    const queryString = `SELECT * FROM teachers WHERE lessonId=${id}`
    return await db.query(queryString);
}

const addTeacher = async (teacher) => {
    const queryString1 = `INSERT INTO teachers VALUES( 
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

const updateTeacher = async (id, teacher) => {
    const queryString1 = `UPDATE teachers SET 
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

module.exports = { getAllTeachers, getTeachersById, getTeacherByCourseId, addTeacher, updateTeacher };