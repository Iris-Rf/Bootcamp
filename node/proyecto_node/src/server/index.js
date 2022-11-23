//Requerimos express y cors y creamos el servidor
const express = require('express');
const cors = require('cors');
const app = express();

//Implementamos las cors
app.use(cors());

//Parseamos la información del servidor
app.use(express.json());
//parsea el body 
app.use(express.urlencoded({ extended: true }));

//Le implementamos el servidor a todas las rutas previamente creadas
require('../routes/routes')(app);

//Exportamos el servidor
module.exports = app;