const {Router}  = require("express");
const teacherActions = require("../actions/teacherActions")
const teacherRouter = Router();

teacherRouter.get("/", async (req, res) => {
    try {
        const teachers = await teacherActions.getAll();
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.get("/:id", async (req, res) => {
    try {
        const teachers = await teacherActions.getById(req.params.id);
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.get("/byCourse/:teacherId", async (req, res) => {
    try {
        const teachers = await teacherActions.getDetailsByCourse(req.params.teacherId);
        res.send(teachers);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.post("/", async (req, res) => {
    try {
        const teacher = await teacherActions.add(req.body);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.put("/:id", async (req, res) => {
    try {
        const teacher = await teacherActions.update(req.params.id, req.body);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

teacherRouter.put("/stopActive/:id", async (req, res) => {
    try {
        const teacher = await teacherActions.stopActivity(req.params.id);
        res.send(teacher);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = teacherRouter;