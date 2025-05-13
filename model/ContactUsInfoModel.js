const db = require("../config/database");
const path = require('path')
const ExcelJS = require('exceljs');
const { log } = require("console");

//getAll()
const getAllContactUsInfo = async () => {
    return await db.query("SELECT * FROM maalot360db.contactusinfo");
}

//getById()
const getContactUsInfoByUserId = async (id) => {
    const queryString = `SELECT * FROM maalot360db.contactusinfo  WHERE id=${id}`
    return await db.query(queryString);
}
//getMessagesInExcel
const getMessagesInExcel = async () => {


    // קבלת הנתונים מהמסד
   const  results = await db.query('SELECT message FROM maalot360db.contactusinfo')
   return results;
  

}
//add()

const addContactUsInfo = async (ContactUsInfoItem) => {
    const queryString = "INSERT INTO maalot360db.contactusinfo (`fname`, `lname`, `email`, `phone`, `courseId`, `courseName`,`message`,`dateCreated`,`status`)" + ` VALUES(     
        '${ContactUsInfoItem.fname}', 
        '${ContactUsInfoItem.lname}', 
        '${ContactUsInfoItem.email}', 
        '${ContactUsInfoItem.phone}', 
        '${ContactUsInfoItem.courseId}',
        '${ContactUsInfoItem.courseName}', 
        '${ContactUsInfoItem.message}',
        '${ContactUsInfoItem.dateCreated}',
        '${ContactUsInfoItem.status}'
 )`;
    const result = await db.query(queryString);
    ContactUsInfoItem.id = result.insertId;
    return ContactUsInfoItem;
}

//delete()
const deleteContactUsInfoByUserId = async (id) => {
    const queryString = `DELETE FROM maalot360db.contactusinfo WHERE id=${id}`;
    return await db.query(queryString);
}

//update()
const UpdateContactUsInfo = async (id, ContactUsInfoItem) => {
    const queryString = "UPDATE `maalot360db`.`contactusinfo` SET" +
        " `fname`=" + `'${ContactUsInfoItem.fname}',` +
        " `lname`=" + `'${ContactUsInfoItem.lname}',` +
        " `email`=" + `'${ContactUsInfoItem.email}',` +
        " `phone`=" + `'${ContactUsInfoItem.phone}',` +
        " `courseId`=" + `'${ContactUsInfoItem.courseId}',` +
        " `courseName`=" + `'${ContactUsInfoItem.courseName}',` +
        " `message`=" + `'${ContactUsInfoItem.message}',` +
        " `dateCreated`=" + `'${ContactUsInfoItem.dateCreated}',` +
        " `status`=" + `'${ContactUsInfoItem.status}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}



const changeStatus = async (id, status) => {


    // עדכון הסטטוס בטבלת ה-studentStatus

    const queryString = "UPDATE `maalot360db`.`contactusinfo` SET" +
        " `status`=" + `'${status}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}
module.exports = { getAllContactUsInfo, getContactUsInfoByUserId, addContactUsInfo, UpdateContactUsInfo, deleteContactUsInfoByUserId, getMessagesInExcel, changeStatus };