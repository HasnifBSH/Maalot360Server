const {Router}  = require("express");
const taskActions = require("../actions/taskActions")
const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
    try {
        const tasks = await taskActions.getAllTasks();
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.get("byUserId/:Id", async (req, res) => {
    try {
        const tasks = await taskActions.getTasksByUserId(id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.get("byCourseId/:Id", async (req, res) => {
    try {
        const tasks = await taskActions.getTasksByCourseId(id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.post("/:id", async (req, res) => {
    try {
        const task = await taskActions.addTask(req.body);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.put("/:id", async (req, res) => {
    try {
        const task = await taskActions.updateTask(req.params.id, req.body);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = taskRouter;