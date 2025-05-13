const db = require("../config/database");

//getAll()
const getAllStudent = async () => {
    return await db.query("SELECT * FROM maalot360db.student");
}

//getById()
const getStudentByUserId = async (id) => {
    const queryString = `SELECT * FROM maalot360db.student  WHERE id=${id}`
    return await db.query(queryString);
}

//add()
const addStudent = async (StudentItem) => {
    const queryString = "INSERT INTO maalot360db.student (`fname`, `lname`, `address`, `email`, `phone`, `userId`, `isActive`)" + ` VALUES(     
        '${StudentItem.fname}', 
        '${StudentItem.lname}', 
        '${StudentItem.address}', 
        '${StudentItem.email}', 
        '${StudentItem.phone}',
        '${StudentItem.userId}', 
        '${StudentItem.isActive}'
 )`;
    const result = await db.query(queryString);
    StudentItem.id = result.insertId;
    return StudentItem;
}

//update()-changeStatus
const changeStatus = async (id,student) => {
const newStatus=0;
if(student.isActive==0)
    newStatus=1;
console.log("newStatus",newStatus);

    // עדכון הסטטוס בטבלת ה-studentStatus
    
     const queryString = "UPDATE `maalot360db`.`student` SET" +
        " `isActive`=" + `'${newStatus}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}

//update()
const UpdateStudent = async (id, StudentItem) => {
    const queryString = "UPDATE `maalot360db`.`student` SET" +
        " `fname`=" + `'${StudentItem.fname}',` +
        " `lname`=" + `'${StudentItem.lname}',` +
        " `address`=" + `'${StudentItem.address}',` +
        " `email`=" + `'${StudentItem.email}',` +
        " `phone`=" + `'${StudentItem.phone}',` +
        " `userId`=" + `'${StudentItem.userId}',` +
        " `isActive`=" + `'${StudentItem.isActive}'` +
        " WHERE (`id`=" + `'${id}')`;
    console.log(queryString);
    const result = await db.query(queryString);
    return result;
}
module.exports = { getAllStudent, getStudentByUserId, addStudent, changeStatus, UpdateStudent };