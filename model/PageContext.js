const db = require("../config/database");

//getAll()
const getAllPageContext = async () => {
    return await db.query("SELECT * FROM pagecontext");
}

//getById()
const getPageContextByUserId = async (id) => {
    const queryString = `SELECT * FROM pagecontext  WHERE id=${id}`
    return await db.query(queryString);
}

//add()
const addPageContext = async (ContactUsInfoItem) => {
    const queryString = `INSERT INTO pagecontext VALUES(     
        '${ContactUsInfoItem.id}',  
        '${ContactUsInfoItem.elementTag}', 
        '${ContactUsInfoItem.elementType}', 
        '${ContactUsInfoItem.text}', 
        '${ContactUsInfoItem.src}', 
        '${ContactUsInfoItem.pageName}', 
 )`;

    const result = await db.query(queryString);
    ContactUsInfoItem.id = result.insertId;
    return todo;
}
//delete()
const deletePageContextByUserId = async (id) => {
    const queryString = `DELETE FROM pagecontext WHERE id=${id}`;
    return await db.query(queryString);
}

//update()
const UpdatePageContext = async (PageContextItem) => {
    const queryString = `UPDATE pagecontext SET
        '${PageContextItem.id}',  
        '${PageContextItem.elementTag}', 
        '${PageContextItem.elementType}', 
        '${PageContextItem.text}', 
        '${PageContextItem.src}', 
        '${PageContextItem.pageName}', 
        WHERE id='${PageContextItem.id}'
 `;
    return await db.query(queryString);
}
module.exports = { getAllPageContext,getPageContextByUserId ,addPageContext ,deletePageContextByUserId,UpdatePageContext};