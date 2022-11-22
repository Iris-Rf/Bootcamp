//Importamos todos los servicios del controller
const apiServices = require('../controller/index');

//Implementaremos el servidor en el argumento app en un futuro definiendole
//la ruta principal donde estarán implementados todos
const routes = (app) => {
  app.use('/api/v1', apiServices);
};

//Exportamos las rutas
module.exports = routes;