const express = require('express');
const cors = require('cors');
const todosRouter = require("./routers/todosRouter")
const courseRouter=require("./routers/courseRouter")
const chatRouter=require("./routers/chatRouter")
const chatMessageRouter=require("./routers/chatMessageRouter")

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
//לצ'אט בזמן אמת 
app.use(express.static('public'));
app.use("/todos", todosRouter)

// Routes
app.use("/course",courseRouter)
app.use("/chat",chatRouter)
app.use("/chatMessage",chatMessageRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});