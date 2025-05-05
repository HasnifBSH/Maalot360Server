const chat = require("../model/chat");
const http = require("http")
const { Server } = require("socket.io");
const { addChatMessage } = require("../actions/chatMessageActions");

const courseServers = {}

const startChat = async (courseId) => {
    if (courseServers[courseId]) {
        return res.status(400).send("chat already started")
    }
    const app = require("express")();
    const server = http.createServer(app);
    const io = new Server(server);
    chatActions.activateChat(courseId)

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

    const PORT = 8080 + parseInt(courseId); // unique port for each chat
    server.listen(PORT, () => {
        console.log(`Chat server for course ${courseId} is running on http://localhost:${PORT}`);
    });

    courseServers[courseId] = { server, io };
    res.send({ message: `Chat server started for course ${courseId} on port ${PORT}` });

}
const stopChat = async (courseId) => {
    if (!courseServers[courseId]) {
        return res.status(400).send({ message: "No chat server running for this course." });
    }
    courseServers[courseId].io.close();
    courseServers[courseId].server.close(() => {
        chatActions.unactivateChat(courseId);
        console.log(`Chat server for course ${courseId} stopped.`);
    });

    delete courseServers[courseId];
    res.send({ message: `Chat server stopped for course ${courseId}` });

}


const getChatById = async (id) => {
    try {
        return await chat.getChatById(id);
    }
    catch (e) {
        throw new Error("error in action file")
    }
}

const getActiveChats = async () => {
    try {
        return await chat.getActiveChats(id);
    }
    catch (e) {
        throw new Error("error in action file")
    }
}
const getChatByCourseId = async (courseId) => {
    try {
        return await chat.getChatByCourseId(id);
    }
    catch (e) {
        throw new Error("error in action file")
    }
}

const unactivateChat = async (chat) => {
    try {
        return await chat.unactivateChat(id);
    }
    catch (e) {
        throw new Error("error in action file")
    }
}
const activateChat = async (courseId) => {
    try {
        return await chat.activateChat(id);
    }
    catch (e) {
        throw new Error("error in action file")
    }
}


module.exports = { startChat, stopChat, getActiveChats, getChatByCourseId, getChatById, getActiveChats, activateChat, unactivateChat };


