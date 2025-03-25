const express = require('express');
const cors = require('cors');
const db = require("./config/database");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes


app.get("/", (req, res) => {
   db.query("SELECT * FROM todos", (err, rows) => {
        if (err)
            res.status(500).send("Error retrieving data from database");
        res.status(200).send(rows);
    })
})

app.get("/:id", (req, res) => {

    const {id} = req.params;
    db.query(`SELECT * FROM todos  WHERE id=${id}`, (err, rows) => {
         if (err)
             res.status(500).send("Error retrieving data from database");
         res.status(200).send(rows);
     })
 })


 app.post("/", (req, res) => {
    const todo = req.body;
    db.query(`INSERT INTO todos
              VALUES( 0,    )`, (err, rows) => {
         if (err)
             res.status(500).send("Error retrieving data from database");
         res.status(200).send(rows);
     })
 })

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});