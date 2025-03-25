const express = require('express');
const cors = require('cors');


const app = express();
const PORT =  8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes


app.get("/",(req,res)=>{
    res.send("hello");
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});