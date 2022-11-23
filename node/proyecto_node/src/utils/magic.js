// crea generador de respuestas + console.log
// Barras bajas por convención 
//Requerimos nuestros enum's
const enum_ = require('./enum');

//Exportamos una función asíncrona que genera una respuesta recibiendo una serie de
//argumentos conformando un objeto informativo con status e info. 

//Este objeto será el que recibamos como respuesta al realizar una petición
// le pasamos un estado + error + mensaje + dato
exports.ResponseService = async (status, errorCode, message, data) => {
  return await {
    status: status,
    info: { errorCode: errorCode, message: message, data: data },
  };
};
// Retorna el estado + info

//Exportamos una serie de funciones que nos muestre por consola un mensaje
//en diferentes colores para conocer el estado del log (exportamos console.logs)

exports.LogSuccess = (msg) => {
  console.log(enum_.GREEN_LOG, msg);
  // El primer parámetro es el color, el segundo es el mensaje
};
exports.LogInfo = (msg) => {
  console.log(enum_.CYAN_LOG, msg);
};
exports.LogWarning = (msg) => {
  console.log(enum_.YELLOW_LOG, msg);
};
exports.LogDanger = (msg) => {
  console.log(enum_.RED_LOG, msg);
};