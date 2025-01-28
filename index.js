//const express = require("express");
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";


const app = express();

//conectar BD

db.authenticate()
    .then(() => console.log("conectado BD"))
    .catch((error) => console.log(error))

const port = process.env.PORT || 4000;

//habilitar pug
app.set("view engine", "pug");

//Obtener año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de Viajes";

    next();
});

//agregar body parse leer datos formulario
app.use(express.urlencoded({extended:true}))

//definir carpeta publica
app.use(express.static("public"));

//agregar ROuter
app.use("/", router);

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port} `);
});
