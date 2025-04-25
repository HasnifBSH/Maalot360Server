const chatMessages = require("../model/chatMessage");


const getAllChatMessage =async ()=>{
    try{
        return await chatMessages.getAllChatMessage();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getChatMessageByChatId = async (chatId)=>{
    return await chatMessages.getChatMessageByChatId(chatId);
}

const getChatMessageById = async (id)=>{
    return await chatMessages.getChatMessageById(id);
}


const addChatMessage = async (newChatMessage)=>{
    return await chatMessages.addChatMessage(newChatMessage);
}

const deleteMessage = async (chat)=>{
    return await chatMessages.deleteMessage(chat);
}



module.exports = {getAllChatMessage,getChatMessageByChatId,getChatMessageById,addChatMessage,deleteMessage};


