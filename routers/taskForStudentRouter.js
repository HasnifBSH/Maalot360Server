const {Router}  = require("express");
const TaskForStudentActions = require("../actions/taskForStudentActions")
const taskForStudentRouter = Router();

taskForStudentRouter.get("/", async (req, res) => {
    try {
        const tasks = await TaskForStudentActions.getAll();
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.get("/:id", async (req, res) => {
    try {
        const task = await TaskForStudentActions.getById(req.params.id);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.get("/byTaskId/:id", async (req, res) => {
    try {
        const tasks = await TaskForStudentActions.getByTaskId(req.params.id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.get("/byStudentId/:id", async (req, res) => {
    try {
        const tasks = await TaskForStudentActions.getByStudentId(req.params.id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.get("/grades/:id", async (req, res) => {
    try {
        const grades = await TaskForStudentActions.getGradesByStudentId(req.params.id);
        res.send(grades);
    }
    catch (e) {
        res.send(e);
    }
})

//!!!לא עשיתי עדיין
//task כאן יש להסתנכרן עם
//עבור כל מטלה של התלמיד שלא התבצעה יש לפנות לטבלת מטלות ולבדוק אם התאריך של מטלה זו הוא היום
taskForStudentRouter.get("/ofTodayAndNotDone/:id", async (req, res) => {
    try {
        const notDoneTasks = await TaskForStudentActions.getOfTodayAndNotDone(req.params.id);
        res.send(notDoneTasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.post("/add", async (req, res) => {
    try {
        const task = await TaskForStudentActions.add(req.body);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

taskForStudentRouter.put("/updateGrade/:id", async (req, res) => {
    try {
        const task = await TaskForStudentActions.updateGrade(req.params.id, req.body.grade);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = taskForStudentRouter;