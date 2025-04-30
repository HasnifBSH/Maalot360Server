const {Router}  = require("express");
const taskActions = require("../actions/taskActions")
const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
    try {
        const tasks = await taskActions.getAll();
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.get("/:id", async (req, res) => {
    try {
        const tasks = await taskActions.getById(req.params.id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.get("/byCourseId/:id", async (req, res) => {
    try {
        const tasks = await taskActions.getByCourseId(req.params.id);
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.post("/:id", async (req, res) => {
    try {
        const task = await taskActions.add(req.body);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.put("/:id", async (req, res) => {
    try {
        const task = await taskActions.update(req.params.id, req.body);
        res.send(task);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = taskRouter;