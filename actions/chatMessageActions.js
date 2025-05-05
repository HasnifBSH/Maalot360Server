const chatMessages = require("../model/chatMessage");


const getAllChatMessage = async () => {
    try {
        return await chatMessages.getAllChatMessage();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getChatMessageByChatId = async (chatId) => {
    try {
        return await chatMessages.getChatMessageByChatId(chatId);
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getChatMessageById = async (id) => {
    try {
        return await chatMessages.getChatMessageById(id);
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}


const addChatMessage = async (newChatMessage) => {
    try {
        return await chatMessages.addChatMessage(newChatMessage);
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const deleteMessage = async (chat) => {
    try {
        return await chatMessages.deleteMessage(chat);
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}



module.exports = { getAllChatMessage, getChatMessageByChatId, getChatMessageById, addChatMessage, deleteMessage };


