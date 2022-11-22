//En nuestro controlador crearemos nuestro router a través de express y 
//requeriremos los servicios que queremos disparar en cada
//una de las rutas
const express = require('express');
const router = express.Router();
const movies = require('../domain/services/service-movie');
const shows = require('../domain/services/service-show');

//Implementamos cada uno de los verbos y sus rutas a cada una de las funciones de 
//los servicios, que dispararán en cadena tanto el generador de las respuestas como
//la funcionalidad en si.
router.get('/movies', movies.GetAll);
router.post('/movies', movies.Create);
router.get('/shows', shows.GetAll);
router.post('/shows', shows.Create);

//Exportamos el router con todas las rutas implementadas.
module.exports = router;