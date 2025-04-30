const express = require('express');
const cors = require('cors');
const teacherRouter = require("./routers/teacherRouter")
const taskForStudentRouter = require("./routers/taskForStudentRouter")
const taskRouter = require("./routers/taskRouter")


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());


app.use("/teacher", teacherRouter)
app.use("/task", taskRouter)
app.use("/taskForStudent", taskForStudentRouter)



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});