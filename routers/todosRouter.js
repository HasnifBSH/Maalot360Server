const {Router}  = require("express");
const todosActions = require("../actions/todosActions")



const todosRouter = Router();



todosRouter.get("/", async (req, res) => {
 

    try {
        const todos = await todosActions.getAllTodos();
        res.send(todos);
    }
    catch (e) {
        res.send(e);
    }
})

todosRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const userTodos =  await todosActions.getTodosByUserId(id);
        res.send(userTodos);
    }
    catch (e) {
        res.send(e);
    }
})


todosRouter.post("/", async (req, res) => {
    const todo = req.body;

    try {
        const newTodo = await todosActions.addTodo(todo);
        res.status(200).send(newTodo);
    }
    catch (e) {
        res.send(e);
    }
})


module.exports = todosRouter