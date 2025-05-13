const db= require("../config/database");

const getAllListItems = async () => {
    return await db.query("SELECT * FROM listItem");
}
const getListItemById = async (id) => {
    const result = await db.query("SELECT * FROM listItem WHERE id = ?", [id]);
    return result[0]; // Assuming only one result is returned
};
const addListItem = async (listItem) => {
    const queryString = `INSERT INTO listItem VALUES( 
        0,    
        '${listItem.title}',  
        '${listItem.description}' , 
        ${listItem.userId} )`;

    const result = await db.query(queryString);
    listItem.id = result.insertId;
    return listItem;
}

// Update an existing list item
const updateListItem = async (id, listItem) => {
    const queryString = `UPDATE listItem SET title = ?, description = ? WHERE id = ?`;
    await db.query(queryString, [
        listItem.title,
        listItem.description,
        id,
    ]);
    return { id, ...listItem };
};

const deleteListItem = async (id) => {
    await db.query("DELETE FROM listItem WHERE id = ?", [id]);
    return { message: `List item with ID ${id} deleted successfully` };
};

module.exports = {
    getAllListItems,
    getListItemById,
    addListItem,
    updateListItem,
    deleteListItem,
};