const express = require('express');
const cors = require('cors');
const todosRouter = require("./routers/todosRouter")
const guideStepRouter = require("./routers/guideStepRouter")
const eventRouter = require("./routers/eventRouter");
const e = require('express');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/todos", todosRouter)
app.use("/guideStep", require(guideStepRouter));
app.use("/event", require(e));


// Routes



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});