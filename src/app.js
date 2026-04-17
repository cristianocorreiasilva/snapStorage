require('dotenv').config();

const Express = require("express");

const connection = require("./config/db");

const app = Express();

app.get("/", (req, res)=>{
    res.send("No ar ...");
});

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log("Servidro no ar ...");
});