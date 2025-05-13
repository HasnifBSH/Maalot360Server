const db = require("../config/database");

//getAll()
const getAllPageContext = async () => {
    return await db.query("SELECT * FROM maalot360db.pagecontext");
}

//getById()
const getPageContextByUserId = async (id) => {
    const queryString = `SELECT * FROM maalot360db.pagecontext  WHERE id=${id}`
    return await db.query(queryString);
}

//add()
const addPageContext = async (PageContextItem) => {
    const queryString = `INSERT INTO maalot360db.pagecontext VALUES(     
        '${PageContextItem.id}',  
        '${PageContextItem.elementTag}', 
        '${PageContextItem.elementType}', 
        '${PageContextItem.text}', 
        '${PageContextItem.src}', 
        '${PageContextItem.pageName}', 
 )`;

    const result = await db.query(queryString);
    PageContextItem.id = result.insertId;
    return todo;
}
//delete()
const deletePageContextByUserId = async (id) => {
    const queryString = `DELETE FROM maalot360db.pagecontext WHERE id=${id}`;
    return await db.query(queryString);
}



const UpdatePageContext = async (id, PageContextItem) => {
    const queryString = "UPDATE `maalot360db`.`pagecontext` SET" +
        " `elementTag`=" + `'${PageContextItem.elementTag}',` +
        " `elementType`=" + `'${PageContextItem.elementType}',` +
        " `text`=" + `'${PageContextItem.text}',` +
        " `src`=" + `'${PageContextItem.src}',` +
        " `pageName`=" + `'${PageContextItem.pageName}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}


module.exports = { getAllPageContext,getPageContextByUserId ,addPageContext ,deletePageContextByUserId,UpdatePageContext};