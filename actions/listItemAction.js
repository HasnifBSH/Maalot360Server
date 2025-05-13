const listItem= require("../model/ListItem");

const getAllListItems =async ()=>{
    try{
        return await listItem.getAllListItems();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}
const getListItemById = async (id)=>{
    return await listItem.getListItemById(id);
}
const addListItem = async (listItem)=>{
    return await listItem.addListItem(listItem);
}
const updateListItem = async (id, listItem) => {
    return await listItem.updateListItem(id, listItem);
};

const deleteListItem = async (id) => {
    return await listItem.deleteListItem(id);
}

module.exports = {getAllListItems, getListItemById, addListItem, updateListItem, deleteListItem};