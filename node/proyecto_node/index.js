//Nos traemos nuestro fichero de configuración para obtener el puerto donde
//levantar el servidor, el servidor en si y los logs magic
const config = require('config-yml');
const server = require('./src/server');
const magic = require('./src/utils/magic');

//Escuchamos el servidor en el puerto indicado en la configuración con un log 
//informativo que nos indicará el puerto local.
server.listen(config.port, () => {
  magic.LogInfo(`Server running on http://localhost:${config.port}`);
});

//Controlamos un mínimo los errores
server.on('error', (err) => {
  magic.LogDanger(err);
});