const Student = require("../model/StudentModel");


const getAllStudent =async ()=>{
    try{
        return await Student.getAllStudent();
    }
    catch(e){
        throw new Error("Error in action file");
    }
}

const getStudentByUserId = async (id)=>{
    return await Student.getStudentByUserId(id);
}

const addStudent = async (StudentInfo)=>{
    return await Student.addStudent(StudentInfo);
}
const changeStatus=async(id,student)=>{
    return await Student.changeStatus(id,student)
}
const UpdateStudent=async (id, UpdateStudentItem)=>{
    return await Student.UpdateStudent(id, UpdateStudentItem)
}

module.exports = {getAllStudent, getStudentByUserId, addStudent,changeStatus,UpdateStudent};