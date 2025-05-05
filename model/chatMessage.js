const db = require("../config/database");
// id
// from
// fromId
//chatId
// createDate
// deleted


const getAllChatMessage = async () => {
    return await db.query("SELECT * FROM chatMassage WHERE deleted=false");
}
const getChatMessageById = async (id) => {
    const queryString = `SELECT * FROM chatMassage  WHERE id=${id} and deleted=false`
    return await db.query(queryString);
}

const getChatMessageByChatId = async (chatId) => {
    const queryString = `SELECT * FROM chatMassage  WHERE chatId=${chatId} and deleted=false`
    return await db.query(queryString);
}


const addChatMessage = async (message) => {
    const queryString = `INSERT INTO chatMassage VALUES( 
        0,    
        '${message.from}',
          false,
        '${message.fromId}',
        '${message.createDate}',
        '${message.chatId}'
        
        )`;

    const result = await db.query(queryString);
    message.id = result.insertId;
    return message;
}
//update
const deleteMessage = async (message) => {
    const queryString = `UPDATE chatMessage SET 
        from='${message.from}',  
        fromId='${message.fromId}',
        date='${message.date}',
        chatId='${message.chatId}',
        deleted=true
        WHERE id=${message.id}`;
    return await db.query(queryString);
}




module.exports = {getAllChatMessage,getChatMessageByChatId,getChatMessageById,addChatMessage,deleteMessage};