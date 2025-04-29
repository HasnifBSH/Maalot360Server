const {Router}  = require("express");
const teacherActions = require("../actions/teacherActions")
const teacherRouter = Router();

teacherRouter.get("/", async (req, res) => {
    try {
        const teachers = await teacherActions.getAllTeachers();
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.get("/:id", async (req, res) => {
    try {
        const teachers = await teacherActions.getTeacherById(id);
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.get("byCourseId/:id", async (req, res) => {
    try {
        const teachers = await teacherActions.getTeacherByCourseId(id);
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.post("/:id", async (req, res) => {
    try {
        const teacher = await teacherActions.addTeacher(req.body);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.put("/:id", async (req, res) => {
    try {
        const teacher = await teacherActions.updateTeacher(req.params.id, req.body);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.put("stopActive/:id", async (req, res) => {
    try {
        const teacher = await teacherActions.stopActivity(req.params.id, req.body);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = teacherRouter;