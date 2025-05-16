const course = require("../model/Course");


const getAllCourses = async () => {
    try {
        return await course.getAllCourses();
    }
    catch (e) {
        throw e;
    }
}

const getCourseById = async (id) => {
    try {
        return await course.getCourseById(id);
    }
    catch (e) {
        throw e;
    }
}

const getCoursesByDate = async (date) => {
    try {
        return await course.getCoursesByDate(date);
    }
    catch (e) {
        throw e;
    }
}

const getCoursesByTeacherId = async (id) => {
    try {
        return await course.getCoursesByTeacherId(id);
    }
    catch (e) {
        throw e;
    }
}
const addCourse = async (c) => {
    try {
        return await course.addCourse(c);
    }
    catch (e) {

        throw e;
    }
}
const updateCourse = async (c,id) => {
    try {
        return await course.updateCourse(c,id);
    }
    catch (e) {
        throw e;
    }
}
const deleteCourse = async (id) => {
    try {
        return await course.deleteCourse(id);
    }
    catch (e) {
        throw e;
    }
}

module.exports = { getAllCourses, getCourseById, getCoursesByDate, getCoursesByTeacherId, addCourse, updateCourse, deleteCourse };


