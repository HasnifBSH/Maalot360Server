const ContactUsInfo = require("../model/ContactUsInfoModel");


const getAllContactUsInfo = async () => {
    try {
        return await ContactUsInfo.getAllContactUsInfo();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}
const getMessagesInExcel = async () => {
    // return await db.query("SELECT message FROM maalot360db.contactusinfo");

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Messages');

    // הגדרת כותרות
    worksheet.columns = [
        { header: 'Message', key: 'message', width: 50 },
    ];

    results = await ContactUsInfo.getMessagesInExcel();
    // הוספת נתונים לWorksheet
    for (let r of results) {
        console.log(r['message']);

        worksheet.addRow({ message: r['message'] })
    }




    // const filePath = path.join(__dirname, 'messages.xlsx'); // בחר את הנתיב שבו תרצה לשמור את הקובץ
    // await workbook.xlsx.writeFile(filePath);

    return workbook;
}
const getContactUsInfoByUserId = async (id) => {
    return await ContactUsInfo.getContactUsInfoByUserId(id);
}

const addContactUsInfo = async (contactUsInfo) => {
    return await ContactUsInfo.addContactUsInfo(contactUsInfo);
}
const deleteContactUsInfoByUserId = async (id) => {
    return await ContactUsInfo.deleteContactUsInfoByUserId(id)
}
const UpdateContactUsInfo = async (id, ContactUsInfoItem) => {
    return await ContactUsInfo.UpdateContactUsInfo(id, ContactUsInfoItem)
}
const changeStatus = async (id, contactUsInfo) => {


    return await ContactUsInfo.changeStatus(id, contactUsInfo)
}

module.exports = { getAllContactUsInfo, getContactUsInfoByUserId, addContactUsInfo, deleteContactUsInfoByUserId, UpdateContactUsInfo, getMessagesInExcel, changeStatus };