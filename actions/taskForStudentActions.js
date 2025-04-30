const TaskForStudent = require("../model/TaskForStudent");
const Task = require("../actions/taskActions")

const getAll = async () => {
    const tasks = await TaskForStudent.getAllFromDB();
    return tasks;
}

const getById = async (id) => {
    const task = await TaskForStudent.getByIdFromDB(id);
    return task;
}

const getByTaskId = async (id) => {
    const task = await TaskForStudent.getByTaskIdFromDB(id);
    return task;
}

const getByStudentId = async (id) => {
    const task = await TaskForStudent.getByStudentIdFromDB(id);
    return task;
}

const getGradesByStudentId = async (id) => {
    const grades = (await getByStudentId(id)).map(t => t.grade);
    return grades;
}

const getOfTodayAndNotDone = async (id) => {
    //קודי משימות שלא נעשו ע"י התלמיד
    const notDoneIds = (await getByStudentId(id)).filter(t => t.status == "לא הוגש").map(t => t.taskId);
    //כל המשימות
    const allTasks = await Task.getAll();
    //המשימות של התלמיד להיום
    const forTodayTasks = allTasks.filter(t =>
        //אם הקוד משימה נמצא ברשימה והתאריך לביצוע הוא היום
        //הוא יכנס למערך המסונן
        notDoneIds.findIndex(id => t.id == id) != -1 &&
        t.finalDate.toISOString().slice(0, 10) == new Date().toISOString().slice(0, 10)
    );
    console.log("forTodayTasks:\n", forTodayTasks);
    return forTodayTasks;
}

//יש לשלוף גם שם תלמידה לפי הקוד שלה
//???באיזה סטטוס לשים מצב הגשה
const add = async (taskForStudent) => {
    taskForStudent.grade = 0;
    taskForStudent.descriptionGrade = '---';
    const res = await TaskForStudent.addToDB(taskForStudent);
    return res;
}

const updateGrade = async (id, grade) => {
    const res = await TaskForStudent.updateGradeInDB(id, grade);
    return res;
}


module.exports = {
    getAll, getById, getByTaskId, getByStudentId, getGradesByStudentId,
    getOfTodayAndNotDone, add, updateGrade
};