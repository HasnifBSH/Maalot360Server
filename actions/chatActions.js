const chat = require("../model/chat");


const getAllChats =async ()=>{
    try{
        return await chat.getAllChats();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getChatById = async (id)=>{
    return await chat.getChatById(id);
}

const getActiveChats = async ()=>{
    return await chat.getActiveChats();
}
const getChatByCourseId=async(courseId)=>{
    return await chat.getChatByCourseId(courseId)
}

const addChat = async (newChat)=>{
    return await chat.addChat(newChat);
}
const activateChat = async (chat)=>{
    return await chat.activateChat(chat);
}
const unactivateChat = async (chat)=>{
    return await chat.unactivateChat(chat);
}


module.exports = {getActiveChats,getAllChats,getChatByCourseId,getChatById,addChat,activateChat,unactivateChat};


