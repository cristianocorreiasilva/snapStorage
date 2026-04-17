const mysql = require('mysql2');

// Não coloque o dotenv.config() aqui, deixe apenas no app.js
const connection = mysql.createPool({ // Usar Pool é melhor para produção
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 16189,
    ssl: {
        rejectUnauthorized: false // CRUCIAL para o Aiven
    }
});

module.exports = connection.promise(); // Facilita o uso de async/await