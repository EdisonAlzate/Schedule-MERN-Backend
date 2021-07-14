console.log('Hi Edisonnnn')
const express = require('express');
const cors=require('cors');
const { dbConnection } = require('./routes/middlewares/database/config');
require('dotenv').config()



//Crear el servidor de express
const app=express();

//Base de datos
dbConnection()

//CORS
app.use(cors())

//lectura y parseo del body
app.use(express.json())

//Directorio publico
app.use(express.static('public'));

//Rutas
//TODO: auth//crear,login,renew
app.use('/api/auth',require('./routes/auth'));
//TODO:CRUD:Eventos


//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Server run un port ${process.env.PORT}`);
})