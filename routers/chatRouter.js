const {Router}  = require("express");
const chatActions = require("../actions/chatActions")

const chatRouter = Router();


// רק צ'אטים פעילים
chatRouter.get("/", async (req, res) => {
 
    try {
        const chats = await chatActions.getActiveChats();
        res.send(chats);
    }
    catch (e) {
        res.send(e);
    }
})
// כל הצ'אטים כולל הלא פעילים 
chatRouter.get("/all", async (req, res) => {
 
    try {
        const chats = await chatActions.getActiveChats();
        res.send(chats);
    }
    catch (e) {
        res.send(e);
    }
})

// לפי id
chatRouter.get("/:id", async (req, res) => {

    const { id } = req.params;
    try {
        const chat =  await chatActions.getChatById(id);
        res.send(chat);
    }
    catch (e) {
        res.send(e);
    }
})
// של קורס ID לפי  
chatRouter.get("/byCourse/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const chats = await chatActions.getChatByCourseId(id);
        res.send(chats);
    }
    catch (e) {
        res.send(e);
    }
})



chatRouter.post("/", async (req, res) => {
    const chat = req.body;

    try {
        const newChat = await chatActions.addChat(chat);
        res.status(200).send(newChat);
    }
    catch (e) {
        res.send(e);
    }
})

chatRouter.put("/activate",async(req,res)=>{
    const chat=req.body;
    try{
        const chat=await chatActions.activateChat(chat);
        res.send(chat);
    }
    catch(e){
        res.send(e);
    }
})


chatRouter.put("/unactivate",async(req,res)=>{
    const chat=req.body;
    try{
        const chat=await chatActions.unactivateChat(chat);
        res.send(chat);
    }
    catch(e){
        res.send(e);
    }
})


module.exports = chatRouter