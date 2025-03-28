const mysql = require('mysql2');
const {promisify} = require('util')
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});


//הפיכת השאילתא ל-promise
connection.query = promisify(connection.query);


module.exports = connection;

