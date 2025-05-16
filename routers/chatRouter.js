const { Router } = require("express");
const chatActions = require("../actions/chatActions");

const chatRouter = Router();

chatRouter.get("/", async (req, res) => {
    try {
        res.send(await chatActions.getAllChats())
    }
    catch (error) {
        res.status(400).send(error);
    }
})
chatRouter.get("/active", async (req, res) => {
    try {
        res.send(await chatActions.getActiveChats())
    }
    catch (error) {
        res.status(400).send(error);
    }
})
chatRouter.get("/:id", async (req, res) => {
    const {id}=req.params;
    try {
        res.send(await chatActions.getChatById(id))
    }
    catch (error) {
        res.status(400).send(error);

    }
})
chatRouter.get("/byCourseId/:id", async (req, res) => {
    const {id}=req.params;
    try {
        res.send(await chatActions.getChatByCourseId(id))
    }
    catch (error) {
        res.status(400).send(error);

    }
})


chatRouter.put("/start/:chatId", async (req, res) => {
    const { chatId } = req.params;
    try {
        const message = await chatActions.startChat(chatId);
        res.send({ message });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})


//  להפוך צ'אט ללא פעיל

chatRouter.put("/stop/:chatId", async (req, res) => {
    const { chatId } = req.params;
    try {
        const message = await chatActions.stopChat(chatId);
        res.send({ message });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})
chatRouter.post("/", async (req, res) => {
    const chat = req.body;
    try {
        const msg = await chatActions.addChat(chat);
        res.send({ msg })
    }
    catch (error) {
        res.status(400).send(error);

    }
})


module.exports = chatRouter