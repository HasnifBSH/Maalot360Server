const course = require("../model/Course");


const getAllCourses = async () => {
    try {
        return await course.getAllCourses();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getCourseById = async (id) => {
    try {
        return await course.getCourseById();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getCoursesByDate = async (date) => {
    try {
        return await course.getCoursesByDate();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

const getCoursesByTeacherId = async (id) => {
    try {
        return await course.getCoursesByTeacherId();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}
const addCourse = async (course) => {
    try {
        return await course.addCourse();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}
const updateCourse = async (course) => {
    try {
        return await course.updateCourse();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}
const deleteCourse = async (id) => {
    try {
        return await course.deleteCourse();
    }
    catch (e) {
        throw new Error("Erro in action file");
    }
}

module.exports = { getAllCourses, getCourseById, getCoursesByDate, getCoursesByTeacherId, addCourse, updateCourse, deleteCourse };


