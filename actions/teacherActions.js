const Teacher = require("../model/Teacher");

const getAll = async () => {
    try {
        return await Teacher.getAllFromDB();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getById = async (id) => {
    return await Teacher.getByIdFromDB(id);
}

//מחזיר רק שם מייל וטלפון
const getDetailsByCourse = async (id) => {
    const teacher = (await getById(id))['0'];
    console.log(teacher);
    const teacherDetails = { name: teacher.fname + " " + teacher.lname, email: teacher.email, phone: teacher.phone };
    console.log(teacherDetails);
    return teacherDetails;
}

const add = async (teacher) => {
    const newTeacher = await Teacher.addToDB(teacher);
    return newTeacher;
}

//!!!
//למרצה - אין לאפשר לשנות תשלום לשעה ופרטים נוספים
const update = async (id, teacher) => {
    //בינתים הצבתי סטטוס ידנית, בהמשך כנראה יהיה ע"י טוקן
    const status=1;
    if(status==0){
        return await Teacher.updateInDB(id, teacher);
    }
    return await Teacher.updateForTeacherInDB(id, teacher);
}

const stopActivity = async (id) => {
    const teacher=await getById(id);
    teacher.isActive = 0;
    return await Teacher.updateInDB(id, teacher);
}

module.exports = { getAll, getById, getDetailsByCourse, add, update, stopActivity };
