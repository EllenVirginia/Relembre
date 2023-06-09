const express = require ('express');
const app= express();
const mysql =require('mysql');
const cors = require ("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createPool ({
    host:"localhost",
    user:"root",
    password: "123321",
    database: "bdlembretes",
})


app.listen(3001, () => {
    console.log("Rodando Servidor")
}) 