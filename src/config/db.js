const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 16189, // Garante que é um número
    ssl: {
        rejectUnauthorized: false
    }
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco:', error);
        return;
    }
    console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = connection;