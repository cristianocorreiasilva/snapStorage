require('dotenv').config();
const mysql = require("mysql2");

console.log("Host no .env" + process.env.DB_HOST);
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

connection.connect((error)=>{
    if(error)throw error
    console.log("Conectado ao banco de dados com sucesso ...");
})

module.exports = connection;