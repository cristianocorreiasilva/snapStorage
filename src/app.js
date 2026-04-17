require('dotenv').config(); // LINHA 1: Carrega as variáveis primeiro

const Express = require("express");
const {engine} = require("express-handlebars")

const path = require("path");

const connection = require("./config/db"); // LINHA 3: Só chama o banco DEPOIS

const app = Express();

app.set("views", path.join(__dirname, "views"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.use(Express.static(path.join(__dirname, "views")));

// Servindo a pasta dist do bootstrap como se fosse a pasta "/bootstrap" na URL
app.use("/bootstrap", Express.static(path.join(__dirname, "..", "node_modules", "bootstrap", "dist")));

app.use(Express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res)=>{
    res.render("home");
});

const PORT = process.env.port || 3000;

app.listen(PORT, ()=>{
    console.log("Servidro no ar ...");
});