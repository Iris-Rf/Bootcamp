//Requerimos todas las dependencias necesarias
const config = require('config-yml');
const mongoose = require('mongoose');
const magic = require('../../utils/magic');
const movie = require('../entities/entity-movie');
const show = require('../entities/entity-show');
const dotenv = require('dotenv');

//Configuramos dotenv para tener acceso a las variables de entorno
dotenv.config();

//Inicializamos un objeto llamado db en el cual almacenarmos de manera
//"local" la información de la conexión y qué esquemas incluirá la 
//lógica de las distintas peticiones
let db = {};

//Comprobamos que exista en nuestro fichero config la clave mongodb dentro de db
//y que tenga longitud

//Si se cumple, recorremos mongodb y por cada una de las conexiones que
//le inyectemos generaremos claves nuevas en nuestro objeto db local.

//Además de la clave, le pasaremos mongoose tal como definimos en el modelo para
//que desde el propio modelo gestione la conexión con Mongo.

//Y exportamos db para utilizarlo en cualquier punto.
if (config.db.mongodb && config.db.mongodb.length > 0) {
  config.db.mongodb.map((c) => {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db[c.nameconn] = {};
    db[c.nameconn].conn = mongoose;
    db[c.nameconn].Movie = movie(mongoose);
    db[c.nameconn].Show = show(mongoose);
  });
  exports.db = db;
  magic.LogInfo('Conectado a la base de datos');
} else {
  magic.LogDanger('No existe la base de datos');
}