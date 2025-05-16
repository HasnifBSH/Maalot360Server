const chat = require("../model/chat");
const http = require("http")
const { Server } = require("socket.io");
const { addChatMessage } = require("../actions/chatMessageActions");

const chatServers = {}

const startChat = async (chatId) => {
    if (chatServers[chatId]) {
        throw new Error("chat already started");
    }
    const app = require("express")();
    const server = http.createServer(app);
    const io = new Server(server);
    chat.activateChat(chatId)

    io.on('connection', async (socket) => {
        console.log("user connected to chat. Socket id: " + socket.id)
        socket.on('disconnect', () => {
            console.log("user disconnected from chat. Socket id: " + socket.id)
        })
        socket.on('chat message', async (msg) => {
            console.log("message sent " + msg)
            const newMsg = { from: msg.from, fromId: msg.fromId, deleted: false, text: msg.contents, createDate: msg.createdDate, chatId: msg.chatId };
            try {
                await addChatMessage(newMsg)
                io.emit('chat message', msg)
            }
            catch (e) {
                console.log("error saving message : ", e);

            }
        })
    });

    const PORT = 8080 + parseInt(chatId); // unique port for each chat
    server.listen(PORT, () => {
        console.log(`Chat id ${chatId} is running on http://localhost:${PORT}`);
    });

    chatServers[chatId] = { server, io };
    return { message: `Chat server started ,id: ${chatId} on port ${PORT}` };

}
const stopChat = async (chatId) => {
    if (!chatServers[chatId]) {
        return { message: "No chat server running with this id" };
    }
    chatServers[chatId].io.close();
    chatServers[chatId].server.close(() => {
        chat.unactivateChat(chatId);
        console.log(`Chat  ${chatId} stopped.`);
    });

    delete chatServers[chatId];
    return { message: `Chat  stopped ,id: ${chatId}` };

}
const getAllChats = async () => {
    try {
        return await chat.getAllChats();
    }
    catch (e) {
        throw e;
    }
}

const getChatById = async (id) => {
    try {
        return await chat.getChatById(id);
    }
    catch (e) {
        throw e;
    }
}

const getActiveChats = async () => {
    try {
        return await chat.getActiveChats();
    }
    catch (e) {
        throw e;
    }
}

const getChatByCourseId = async (id) => {
    try {
        return await chat.getChatByCourseId(id);
    }
    catch (e) {
        throw e;
    }
}
const addChat = async (c) => {
    try {
        return await chat.addChat(c);
    }
    catch (e) {
        throw (e);
    }
}
// const unactivateChat = async (id) => {
//     try {
//         return await chat.unactivateChat(id);
//     }
//     catch (e) {
//         throw new Error("error in action file")
//     }
// }
// const activateChat = async (id) => {
//     try {
//         return await chat.activateChat(id);
//     }
//     catch (e) {
//         throw new Error("error in action file")
//     }
// }


module.exports = { getAllChats, startChat, stopChat, getActiveChats, getChatByCourseId, getChatById, getActiveChats, addChat };


