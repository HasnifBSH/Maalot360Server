const db = require("../config/database");

// id
// name
// courseId
// isActive

const getAllChats = async () => {
    return await db.query("SELECT * FROM chat");
}


const getChatById = async (id) => {
    const queryString = `SELECT * FROM chat  WHERE id=${id} and active`
    return await db.query(queryString);
}

const getChatByCourseId = async (id) => {
    const queryString = `SELECT * FROM chat  WHERE courseId=${id} and active=true`
    return await db.query(queryString);
}

const getActiveChats=async()=>{
    const queryString = `SELECT * FROM chat  WHERE active=true`
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
const activateChat = async (chat) => {
    const queryString = `UPDATE chat SET 
        name='${chat.name}',  
       courseId='${chat.courseId}',
        active='${true}'
        WHERE id=${chat.id}`;
    return await db.query(queryString);
}
const unactivateChat = async (chat) => {
    const queryString = `UPDATE chat SET 
        name='${chat.name}',  
       courseId='${chat.courseId}',
        active='${false}'
        WHERE id=${chat.id}`;
    return await db.query(queryString);
}


module.exports = {getAllChats,getActiveChats,getChatByCourseId,getChatById,addChat,activateChat,unactivateChat};