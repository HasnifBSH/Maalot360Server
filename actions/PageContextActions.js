const PageContext = require("../model/PageContext");


const getAllPageContext =async ()=>{
    try{
        return await PageContext.getAllPageContext();
    }
    catch(e){
        throw new Error("Error in action file");
    }
}

const getPageContextByUserId = async (id)=>{
    return await PageContext.getPageContextByUserId(id);
}

const addPageContext = async (pageContextInfo)=>{
    return await PageContext.addPageContext(pageContextInfo);
}
const deletePageContextByUserId=async (id)=>{
    return await PageContext.deletePageContextByUserId(id)
}
const UpdatePageContext=async (UpdatePageContextItem)=>{
    return await PageContext.UpdatePageContext(UpdatePageContextItem)
}

module.exports = {getAllPageContext, getPageContextByUserId, addPageContext,deletePageContextByUserId,UpdatePageContext};