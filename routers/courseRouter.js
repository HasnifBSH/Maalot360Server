const {Router}  = require("express");
const courseActions = require("../actions/courseActions")

const courseRouter = Router();



courseRouter.get("/", async (req, res) => {
 
    try {
        const course = await courseActions.getAllCourses();
        res.send(course);
    }
    catch (e) {
        res.send(e);
    }
})

courseRouter.get("/:id", async (req, res) => {

    const { id } = req.params;
    try {
        const userTodos =  await todosActions.getTodosByUserId(id);
        res.send(userTodos);
    }
    catch (e) {
        res.send(e);
    }
})



courseRouter.post("/", async (req, res) => {
    const course = req.body;

    try {
        const newCourse = await courseActions.addCourse(course);
        res.status(200).send(newCourse);
    }
    catch (e) {
        res.send(e);
    }
})


module.exports = todosRouter