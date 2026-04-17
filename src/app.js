require('dotenv').config(); // LINHA 1: Carrega as variáveis primeiro
const Express = require("express");
const connection = require("./config/db"); // LINHA 3: Só chama o banco DEPOIS

const app = Express();

app.get("/", (req, res)=>{
    res.send("No ar ...");
});

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log("Servidro no ar ...");
});