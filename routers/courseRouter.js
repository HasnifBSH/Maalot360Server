const {Router}  = require("express");
const courseActions = require("../actions/courseActions")

const courseRouter = Router();



courseRouter.get("/", async (req, res) => {
 
    try {
        const course = await courseActions.getAllCourses();
        res.send(course);
    }
    catch (e) {
        res.send(e);
    }
})

courseRouter.get("/:id", async (req, res) => {

    const { id } = req.params;
    try {
        const course =  await courseActions.getCourseById(id);
        res.send(course);
    }
    catch (e) {
        res.send(e);
    }
})

courseRouter.get("/byTeacherId/:id", async (req, res) => {

    const { id } = req.params;
    try {
        const courses =  await courseActions.getCoursesByTeacherId(id);
        res.send(courses);
    }
    catch (e) {
        res.send(e);
    }
})
//  שליפת כל הקורסים הפעילים בתאריך שמתקבל
courseRouter.get("/byDate/:date", async (req, res) => {

    const { date } = req.params;
    try {
        const courses =  await courseActions.getCoursesByDate(date);
        res.send(courses);
    }
    catch (e) {
        res.send(e);
    }
})



courseRouter.post("/", async (req, res) => {
    const course = req.body;

    try {
        const newCourse = await courseActions.addCourse(course);
        res.status(200).send(newCourse);
    }
    catch (e) {
        res.send(e);
    }
})

courseRouter.delete("/:id", async (req, res) => {
    const id = req.params;

    try {
        const result = await courseActions.deleteCourse(id);
        res.status(200).send(result);
    }
    catch (e) {
        res.send(e);
    }
})




module.exports = courseRouter