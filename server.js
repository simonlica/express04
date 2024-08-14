//como carregar a configuração do mysql atraves do arquivo externo 

const express = require('express')
const mysql = require("mysql2");

const mysql_config = require('./mysql_config')

const app = express()
app.listen(3000,()=>{
    console.log("servidor ok, pode ir pra chapa na paz")
})

const connection = mysql.createConnection(mysql_config)

