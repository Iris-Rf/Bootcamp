//Exportamos una función que recibe una conexión a la base de datos,
//con la cual generará un esquema de Mongoose con la información y el tipo necesarios
module.exports = (db) => {
    const showSchema = new db.Schema(
      {
        title: String,
        poster: String,
      },
      {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at',
        },
      }
    );
    return db.model('Shows', showSchema);
  };