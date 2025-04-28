const express = require('express');
const cors = require('cors');
const guideStepRouter = require("./routers/guideStepRouter")


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/guideStep", guideStepRouter)


// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Maalot360 Server!");
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});