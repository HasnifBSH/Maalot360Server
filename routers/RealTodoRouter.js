const {Router}  = require("express");
const RealTodoActions = require("../actions/RealTodoActions")

const RealTodoRouter = Router();


//getAll
RealTodoRouter.get("/", async (req, res) => {
    try {
        const RealTodoInfo = await RealTodoActions.getAllRealTodo();
        res.send(RealTodoInfo);
    }
    catch (e) {
        res.send(e);
    }
})
//getById
RealTodoRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const RealTodoInfo =  await RealTodoActions.getRealTodoByUserId(id);
        res.send(RealTodoInfo);
    }
    catch (e) {
        res.send(e);
    }
})

//add
RealTodoRouter.post("/", async (req, res) => {
    const RealTodoInfo = req.body;
    try {
        const newRealTodo = await RealTodoActions.addRealTodo(RealTodoInfo);
        res.status(200).send(newRealTodo);
    }
    catch (e) {
        res.send(e);
    }
}
)
//delete
RealTodoRouter.delete("/:id", async (req, res) => {
    try {
        const deletedRealTodo= await RealTodoActions.deleteRealTodoByUserId(req.params.id);
        res.status(200).send(deletedRealTodo);
    }
    catch (e) {
        res.send(e);
    }
}
)
//update
RealTodoRouter.put("/:id", async (req, res) => {
    const RealTodoInfo = req.body;
    try {
        const newRealTodo= await RealTodoActions.UpdateRealTodo(req.params.id, RealTodoInfo);
        res.status(200).send(newRealTodo);
    }
    catch (e) {
        res.send(e);
    }
}
)

module.exports = RealTodoRouter