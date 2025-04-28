const {Router}  = require("express");
const listItemActions = require("../actions/listItemAction")


const listItemRouter = Router();

listItemRouter.get("/", async (req, res) => {
    try {
        const listItems = await listItemActions.getAllListItems();
        res.send(listItems);
    }
    catch (e) {
        res.send(e);
    }
})
listItemRouter.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const listItem =  await listItemActions.getListItemById(id);
        res.send(listItem);
    }
    catch (e) {
        res.send(e);
    }
})
listItemRouter.post("/", async (req, res) => {
    const listItem = req.body;

    try {
        const newListItem = await listItemActions.addListItem(listItem);
        res.status(200).send(newListItem);
    }
    catch (e) {
        res.send(e);
    }
})
listItemRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const listItem = req.body;

    try {
        const updatedListItem = await listItemActions.updateListItem(id, listItem);
        res.status(200).send(updatedListItem);
    }
    catch (e) {
        res.send(e);
    }
})

listItemRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const deletedListItem = await listItemActions.deleteListItem(id);
        res.status(200).send(deletedListItem);
    }
    catch (e) {
        res.send(e);
    }
})
module.exports = listItemRouter;