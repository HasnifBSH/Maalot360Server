const chatMessages = require("../model/chatMessage");


const getAllChatMessage = async () => {
    try {
        return await chatMessages.getAllChatMessage();
    }
    catch (e) {
        throw e;
    }
}

const getChatMessageById = async (id) => {
    try {
        return await chatMessages.getChatMessageById(id);
    }
    catch (e) {
        throw e;
    }
}

const getChatMessageByChatId = async (chatId) => {
    try {
        return await chatMessages.getChatMessageByChatId(chatId);
    }
    catch (e) {
        throw e;
    }
}




const addChatMessage = async (newChatMessage) => {
    try {
        return await chatMessages.addChatMessage(newChatMessage);
    }
    catch (e) {
        throw e;
    }
}

const deleteMessage = async (id) => {
    try {
       
        return await chatMessages.deleteMessage(id);
    }
    catch (e) {
        throw e;
    }
}



module.exports = { getAllChatMessage, getChatMessageByChatId, getChatMessageById, addChatMessage, deleteMessage };


