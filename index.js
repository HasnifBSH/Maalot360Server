const express = require('express');
const cors = require('cors');
const todosRouter = require("./routers/todosRouter")

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter)

// Routes



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});