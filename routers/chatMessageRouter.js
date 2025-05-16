const {Router}  = require("express");
const chatMessageActions = require("../actions/chatMessageActions")

const chatMessageRouter = Router();

// get all
chatMessageRouter.get("/", async (req, res) => {
 
    try {
        const messages = await chatMessageActions.getAllChatMessage();
        res.send(messages);
    }
    catch (e) {
        res.send(e);
    }
})


// לפי id
chatMessageRouter.get("/:id", async (req, res) => {

    const { id } = req.params;
    try {
        const chat =  await chatMessageActions.getChatMessageById(id);
        res.send(chat);
    }
    catch (e) {
        res.send(e);
    }
})

// של הצ'אט ID לפי  
chatMessageRouter.get("/byChat/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const chats = await chatMessageActions.getChatMessageByChatId(id);
        res.send(chats);
    }
    catch (e) {
        res.send(e);
    }
})


// הוספה
chatMessageRouter.post("/", async (req, res) => {
    const message = req.body;

    try {
        const newMessage = await chatMessageActions.addChatMessage(message);
        res.status(200).send(newMessage);
    }
    catch (e) {
        res.send(e);
    }
})
//  עדכון-(מחיקה)
// deleted מבצע פעולה של עדכון שמסמנת את ההודעה כ-
chatMessageRouter.put("/delete/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        const chat=await chatMessageActions.deleteMessage(id);
        res.send(chat);
    }
    catch(e){
        res.send(e);
    }
})




module.exports = chatMessageRouter