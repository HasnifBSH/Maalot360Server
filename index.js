const express = require('express');
const cors = require('cors');
const todosRouter = require("./routers/todosRouter")
const ContactUsInfoRouter = require("./routers/ContactUsInfoRouter")
const PageContextRouter = require("./routers/PageContextRouter")
const StudentRouter = require("./routers/StudentRouter")
const RealTodoRouter= require("./routers/RealTodoRouter")


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
// Routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});