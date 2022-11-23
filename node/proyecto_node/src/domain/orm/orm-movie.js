//Requerimos el repositorio de mongo
const conn = require('../repositories/mongo.repository');
const magic =
  //Y exportamos cada una de las funciones que se encargarán de realizar la funcionalidad
  //sin ningún tipo de "mensaje" o comprobación.

  //Simplemente encontraremos o crearemos nuevos elementos en base a un modelo y, si diera
  //el caso de algún error saldriamos de la función.

  //En el siguiente apartado nos encargaremos de recoger estas funciones y formatearlas
  //para generar una respuesta en el servidor

  // Permite el movimiento, acceder, buscar, modificar
  (exports.GetAll = async () => {
    try {

      // Ejemplo para relacionar esquemas - return await conn.db.connMongo.Movie.find()populate.movie;

      return await conn.db.connMongo.Movie.find();
    } catch (error) {
      console.log(' err orm-movie.getAll = ', error);
      return await { err: { code: 123, message: error } };
    }
    // ejemplo classe
    // } catch (error) {
    //   magic.LogDanger('Cannot get movies', error);
    //   return await { err: { code: 123, message: error } };
    // }
  });

exports.Create = async (Title, Poster) => {
  try {
    const data = await new conn.db.connMongo.Movie({
      title: Title,
      poster: Poster,
    });
    data.save();
    // Devuelve lo que hemos creado
    return true;
  } catch (error) {
    console.log(' err orm-movie.Create = ', error);
    return await { err: { code: 123, message: error } };
  }
};

// Se puede añadir objetos para parametrizar 