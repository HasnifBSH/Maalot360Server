// משתלמת יכולה לצפות ולסנן את רשימת המטלות שלה. (להחלטתכן – איזה סינונים)
// מרצה יכולה לצפות ברשימת המטלות לפי קורס.  
// מרצה יכולה לעדכן מטלה.

const {Router}  = require("express");
// const taskActions = require("../actions/taskActions")
const taskRouter = Router();

taskRouter.get("/", async (req, res) => {
    try {
        // const tasks = await taskActions.getAllTasks();
        const tasks = null;
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

taskRouter.get("/:userId", async (req, res) => {
    try {
        // const tasks = await taskActions.getAllTasks();
        const tasks = null;
        res.send(tasks);
    }
    catch (e) {
        res.send(e);
    }
})

module.exports = taskRouter;