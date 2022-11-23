// Definimos rutas, puede haber una principal y sub-rutas
//Importamos todos los servicios del controller
const apiServices = require('../controller/index');

//Implementaremos el servidor en el argumento app en un futuro definiendole
//la ruta principal donde estarán implementados todos
// Función donde pasams el server
const routes = (app) => {
  // v1 utiliza todas las rutas
  app.use('/api/v1', apiServices);
};

//Exportamos las rutas
module.exports = routes;