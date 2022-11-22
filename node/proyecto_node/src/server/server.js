//Requerimos express y cors y creamos el servidor
const express = require('express');
const cors = require('cors');
const server = express();

//Implementamos las cors
server.use(cors());

//Parseamos la información del servidor
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//Le implementamos el servidor a todas las rutas previamente creadas
require('../routes')(server);

//Exportamos el servidor
module.exports = server;