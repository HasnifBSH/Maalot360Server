const db = require("../config/database");


const getAllCourses = async () => {
    return await db.query("SELECT * FROM course");
}


const getCourseById = async (id) => {
    const queryString = `SELECT * FROM course  WHERE id=${id}`
    return await db.query(queryString);
}

const getCoursesByTeacherId = async (id) => {
    const queryString = `SELECT * FROM course  WHERE teacherId=${id}`
    return await db.query(queryString);
}
//  מקבל תאריך ומחזיר את כל הקורסים הפעילים בתאריך הזה
const getCoursesByDate = async (date) => {
    const queryString = `SELECT * FROM course  WHERE startDate<='${date} ' AND endDate>='${date}'`
}

const addCourse = async (course) => {
    const queryString = `INSERT INTO course VALUES( 
        0,    
        '${course.name}',  
        '${course.desc}',
        '${course.teacherId}',
        '${course.startDate}',
        '${course.endDate}',
        '${course.numOfHours}',
        '${course.numOfHoursPerLesson}', 
        '${course.numOfLessons}',
        '${course.moreInfo}',
        '${course.sylabus}',
        '${course.img}'
        )`;

    const result = await db.query(queryString);
    course.id = result.insertId;
    return course;
}
const updateCourse = async (course) => {
    const queryString = `UPDATE course SET 
        name='${course.name}',  
        desc='${course.desc}',
        startDate='${course.startDate}',
        endDate='${course.endDate}',
        numOfHours='${course.numOfHours}',
        numOfHoursPerLesson='${course.numOfHoursPerLesson}',
        numOfLessons='${course.numOfLessons}',
        moreInfo='${course.moreInfo}',
        sylabus='${course.sylabus}',
        img='${course.img}'
        WHERE id=${course.id}`;
    return await db.query(queryString);
}

const deleteCourse = async (id) => {
    const queryString = `DELETE FROM course WHERE id=${id}`
}

module.exports = {getAllCourses, getCourseById, getCoursesByTeacherId, getCoursesByDate, addCourse, updateCourse, deleteCourse};