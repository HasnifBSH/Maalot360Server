const Teacher = require("../model/Teacher");

const getAllTeachers = async () => {
    try {
        return await Teacher.getAllFromDB();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getTeacherById = async (id) => {
    return await Teacher.getByIdFromDB(id);
}

//מחזיר רק שם מייל וטלפון
const getTeacherByCourseId = async (id) => {
    const teacher = await Teacher.getByCourseIdFromDB(id);
    return {name:teacher.name, email:teacher.email, phone:teacher.phone };
}

const addTeacher = async (teacher) => {
    return await Teacher.addToDB(teacher);
}

//!!!
//למרצה - אין לאפשר לשנות תשלום לשעה ופרטים נוספים
const updateTeacher = async (id, teacher) => {
    return await Teacher.updateInDB(id, teacher);
}

const stopActivity = async (id, teacher) => {
    teacher.isActive=false;
    return await Teacher.updateInDB(id, teacher);
}

module.exports = { getAllTeachers, getTeacherById, getTeacherByCourseId, addTeacher, updateTeacher, stopActivity};
