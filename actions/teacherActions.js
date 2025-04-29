const teacher = require("../model/Teacher");

const getAllTeachers = async () => {
    try {
        return await teacher.getAllTeachers();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getTeacherById = async (id) => {
    return await teacher.getTeachersById(id);
}

//מחזיר רק שם מייל וטלפון
const getTeacherByCourseId = async (id) => {
    const teacher = await teacher.getTeacherByCourseId(id);
    return {name:teacher.name, email:teacher.email, phone:teacher.phone };
}

const addTeacher = async (teacher) => {
    return await teacher.addTeacher(teacher);
}

//!!!
//למרצה - לא כולל תשלום לשעה ופרטים נוספים
const updateTeacher = async (id, teacher) => {
    return await teacher.updateTeacher(id, teacher);
}

const stopActivity = async (id, teacher) => {
    teacher.isActive=false;
    return await teacher.updateTeacher(id, teacher);
}

module.exports = { getAllTeachers, getTeacherById, getTeacherByCourseId, addTeacher, updateTeacher, stopActivity};
