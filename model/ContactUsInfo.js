const db = require("../config/database");

//getAll()
const getAllContactUsInfo = async () => {
    return await db.query("SELECT * FROM contactusinfo");
}

//getById()
const getContactUsInfoByUserId = async (id) => {
    const queryString = `SELECT * FROM contactusinfo  WHERE id=${id}`
    return await db.query(queryString);
}

//add()
const addContactUsInfo = async (ContactUsInfoItem) => {
    const queryString = `INSERT INTO contactusinfo VALUES(     
        '${ContactUsInfoItem.fname}',  
        '${ContactUsInfoItem.lname}', 
        '${ContactUsInfoItem.email}', 
        '${ContactUsInfoItem.phone}', 
        '${ContactUsInfoItem.courseId}', 
        '${ContactUsInfoItem.courseName}', 
 )`;

    const result = await db.query(queryString);
    ContactUsInfoItem.id = result.insertId;
    return todo;
}
//delete()
const deleteContactUsInfoByUserId = async (id) => {
    const queryString = `DELETE FROM contactusinfo WHERE id=${id}`;
    return await db.query(queryString);
}

//update()
const UpdateContactUsInfo = async (ContactUsInfoItem) => {
    const queryString = `UPDATE contactusinfo SET
        fname='${ContactUsInfoItem.fname}',  
        lname='${ContactUsInfoItem.lname}', 
        email='${ContactUsInfoItem.email}', 
        phone='${ContactUsInfoItem.phone}', 
        courseId='${ContactUsInfoItem.courseId}', 
        courseName='${ContactUsInfoItem.courseName}'
        WHERE courseId='${ContactUsInfoItem.courseId}'
 `;
    return await db.query(queryString);
}
module.exports = { getAllContactUsInfo, getContactUsInfoByUserId, addContactUsInfo,UpdateContactUsInfo,deleteContactUsInfoByUserId};