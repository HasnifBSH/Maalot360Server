const db = require("../config/database");

// id
// name
// courseId
// isActive

//get also not active chats
const getAllChats = async () => {
    return await db.query("SELECT * FROM chat");
}

const getActiveChats=async()=>{
    const queryString = `SELECT * FROM chat  WHERE isActive=true`
    return await db.query(queryString);
}
const getChatById = async (id) => {
    const queryString = `SELECT * FROM chat  WHERE id=${id}`
    return await db.query(queryString);
}

const getChatByCourseId = async (id) => {
    const queryString = `SELECT * FROM chat  WHERE courseId=${id}`
    return await db.query(queryString);
}



const addChat = async (chat) => {
    const queryString = `INSERT INTO chat VALUES( 
        0,    
        '${chat.name}',  
        '${chat.courseId}',
        true
        )`;

    const result = await db.query(queryString);
    chat.id = result.insertId;
    return chat;
}
//     update:
const activateChat = async (id) => {
    const queryString = `UPDATE chat SET 
        isActive=1
        WHERE id=${id}`;
    return await db.query(queryString);
}

const unactivateChat = async (id) => {
    const queryString = `UPDATE chat SET 
        isActive=0
        WHERE id=${id}`;
    return await db.query(queryString);
}


module.exports = {getAllChats,getActiveChats,getChatByCourseId,getChatById,addChat,activateChat,unactivateChat};