const ContactUsInfo = require("../model/ContactUsInfo");


const getAllContactUsInfo =async ()=>{
    try{
        return await ContactUsInfo.getAllContactUsInfo();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getContactUsInfoByUserId = async (id)=>{
    return await ContactUsInfo.getContactUsInfoByUserId(id);
}

const addContactUsInfo = async (contactUsInfo)=>{
    return await ContactUsInfo.addContactUsInfo(contactUsInfo);
}
const deleteContactUsInfoByUserId=async (id)=>{
    return await ContactUsInfo.deleteContactUsInfoByUserId(id)
}
const UpdateContactUsInfo=async (ContactUsInfoItem)=>{
    return await ContactUsInfo.UpdateContactUsInfo(ContactUsInfoItem)
}

module.exports = {getAllContactUsInfo, getContactUsInfoByUserId, addContactUsInfo,deleteContactUsInfoByUserId,UpdateContactUsInfo};