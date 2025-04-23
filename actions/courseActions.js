const course = require("../model/Course");


const getAllCourses =async ()=>{
    try{
        return await course.getAllCourses();
    }
    catch(e){
        throw new Error("Erro in action file");
    }
}

const getCourseById = async (id)=>{
    return await course.getCourseById(id);
}

const getCoursesByDate = async (date)=>{
    return await course.getCoursesByDate(date);
}

const getCoursesByTeacherId = async (id)=>{
    return await course.getCoursesByTeacherId(id);
}
const addCourse = async (course)=>{
    return await course.addCourse(course);
}
const updateCourse = async (course)=>{
    return await course.updateCourse(course);
}
const deleteCourse = async (id)=>{
    return await course.deleteCourse(id);
}

module.exports = {getAllCourses, getCourseById, getCoursesByDate, getCoursesByTeacherId, addCourse, updateCourse, deleteCourse};


