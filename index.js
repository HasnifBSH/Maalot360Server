const express = require('express');
const cors = require('cors');
const teacherRouter = require("./routers/teacherRouter")
const taskForStudentRouter = require("./routers/taskForStudentRouter")
const taskRouter = require("./routers/taskRouter")
const todosRouter = require("./routers/todosRouter")
const ContactUsInfoRouter = require("./routers/ContactUsInfoRouter")
const PageContextRouter = require("./routers/PageContextRouter")
const StudentRouter = require("./routers/StudentRouter")
const RealTodoRouter= require("./routers/RealTodoRouter")
const guideStepRouter = require("./routers/guideStepRouter")
const eventRouter = require("./routers/eventRouter");
const listItemRouter = require("./routers/listItemRouter")


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

app.use("/todos", todosRouter)
app.use("/contactUsInfo", ContactUsInfoRouter)
app.use("/pageContext", PageContextRouter)
app.use("/student", StudentRouter)
app.use("/realTodo", RealTodoRouter)
app.use("/guideStep", guideStepRouter);
app.use("/event", eventRouter);
app.use("/listItem", listItemRouter);
app.use("/uploads", express.static("uploads"));
app.use("/teacher", teacherRouter)
app.use("/task", taskRouter)
app.use("/taskForStudent", taskForStudentRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
