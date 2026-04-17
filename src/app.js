require('dotenv').config();

const Express = require("express");

const connection = require("./config/db");

const app = Express();

app.get("/", (req, res)=>{
    res.send("No ar ...");
});

const PORT = process.env.port;

app.listen(3000 || PORT, ()=>{
    console.log("Servidro no ar ...");
});