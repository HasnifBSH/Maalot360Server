const {Router}  = require("express");
const StudentActions = require("../actions/StudentActions");    
const StudentRouter = Router();

//getAll
StudentRouter.get("/", async (req, res) => {
    try {
        const StudentInfo = await StudentActions.getAllStudent();
        res.send(StudentInfo);
    }
    catch (e) {
        res.send(e);
    }
})
//getById
StudentRouter.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {
        const StudentInfo =  await StudentActions.getStudentByUserId(id);
        res.send(StudentInfo);
    }
    catch (e) {
        res.send(e);
    }
})

//add
StudentRouter.post("/", async (req, res) => {
    const StudentInfo = req.body;
    console.log(StudentInfo);
    
    try {
        const newStudent = await StudentActions.addStudent(StudentInfo);
        res.status(200).send(newStudent);
    }
    catch (e) {
        res.send(e);
    }
}
)
//delete
StudentRouter.delete("/:id", async (req, res) => {
    try {
        const deletedStudent= await StudentActions.deleteStudentActionsByUserId(id);
        res.status(200).send(deletedStudent);
    }
    catch (e) {
        res.send(e);
    }
}
)
//update
StudentRouter.put("/:id", async (req, res) => {
    const StudentInfo = req.body;
    try {
        const newStudent= await StudentActions.UpdateStudent(req.params.id, StudentInfo);
        res.status(200).send(newStudent);
    }
    catch (e) {
        res.send(e);
    }
}
)

//changeStatus
StudentRouter.put("/changeStatus/:id", async (req, res) => {
    try {
        const newStudent= await StudentActions.changeStatus(req.params.id,req.body.isActive);
        res.status(200).send(newStudent);
    }
    catch (e) {
        res.send(e);
    }
}
)

module.exports = StudentRouter