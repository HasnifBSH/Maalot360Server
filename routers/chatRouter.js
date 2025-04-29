const { Router } = require("express");
const chatActions = require("../actions/chatActions")

const chatRouter = Router();

chatRouter.get("/",async(req,res)=>{
    return chatActions.getAllChats()
})

chatRouter.post("/start/:courseId", async (req, res) => {
    const { courseId } = req.params;
    try {
        const message = await startChat(courseId);
        res.send({ message });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})


//  להפוך צ'אט ללא פעיל

chatRouter.post("/stop/:courseId", async (req, res) => {
    const { courseId } = req.params;
    try {
        const message = await stopChat(courseId);
        res.send({ message });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})


module.exports = chatRouter