//Requerimos los logs, los enums y las funciones en base a cada uno de los modelos
const magic = require('../../utils/magic');
const enum_ = require('../../utils/enum');
const ormMovie = require('../orm/orm-movie');

//Exportamos cada una de ellas generando una serie de indicaciones con las que
//completar las respuesta, tanto si podemos realizar la función como si no.

//Gracias a las funciones de cada uno de los orm implementaremos el lanzar 
//la lógica de la petición y con ResponseService de magic formatearemos la 
//respuesta que nos devolverá el servidor, trabajando con los códigos que tenemos
//almacenados en enum.
exports.GetAll = async (req, res) => {
  let status = 'Success',
    errorcode = '',
    message = '',
    data = '',
    statuscode = 0,
    response = {};
  try {
    let respOrm = await ormMovie.GetAll();
    if (respOrm.err) {
      (status = 'Failure'),
        (errorcode = respOrm.err.code),
        (message = respOrm.err.messsage),
        (statuscode = enum_.CODE_BAD_REQUEST);
    } else {
      (message = 'Success Response'),
        (data = respOrm),
        (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (err) {
    console.log('err = ', err);
    response = await magic.ResponseService(
      'Failure',
      enum_.CRASH_LOGIC,
      err,
      ''
    );
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.Create = async (req, res) => {
  let status = 'Success',
    errorcode = '',
    message = '',
    data = '',
    statuscode = 0,
    response = {};
  try {
    const Title = req.body.Title;
    const Poster = req.body.Poster;
//Adicionalmente podemos comprobar si nuestro nuevo objeto está completo con los 
//parámetros correctos, independientemente de si son requeridos o no.
    if (Title && Poster) {
      let respOrm = await ormMovie.Create(Title, Poster);
      if (respOrm.err) {
        (status = 'Failure'),
          (errorcode = respOrm.err.code),
          (message = respOrm.err.messsage),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = 'Movie created'), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = 'Failure'),
        (errorcode = enum_.ERROR_REQUIRED_FIELD),
        (message = 'All fields are required'),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (err) {
    console.log('err = ', err);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService('Failure', enum_.CRASH_LOGIC, 'err', '')
      );
  }
};