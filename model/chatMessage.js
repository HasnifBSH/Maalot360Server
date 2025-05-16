const db = require("../config/database");
// id
// from
// fromId
//chatId
// createDate
// deleted


const getAllChatMessage = async () => {
    return await db.query("SELECT * FROM chatmessage WHERE deleted=false");
}
const getChatMessageById = async (id) => {
    const queryString = `SELECT * FROM chatmessage  WHERE id=${id} and deleted=false`
    return await db.query(queryString);
}

const getChatMessageByChatId = async (chatId) => {
    const queryString = `SELECT * FROM chatmessage  WHERE chatId=${chatId} and deleted=false`
    return await db.query(queryString);
}


const addChatMessage = async (message) => {
    const queryString = `INSERT INTO chatmessage VALUES( 
        0,    
        '${message.from}',
          0,
        ${message.fromId},
        '${message.createDate}',
        ${message.chatId},
        '${message.text}'        
        )`;

    const result = await db.query(queryString);
    message.id = result.insertId;
    return message;
}
//update
const deleteMessage = async (id) => {
    const queryString = `UPDATE chatMessage SET 
        deleted=1
        WHERE id=${id}`;
    return await db.query(queryString);
}




module.exports = {getAllChatMessage,getChatMessageByChatId,getChatMessageById,addChatMessage,deleteMessage};