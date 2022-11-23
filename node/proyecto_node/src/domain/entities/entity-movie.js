// Modelos - se traga bbdd desde fuera

// Le pasaremos mongoose en un futuro
module.exports = (db) => {
  const movieSchema = new db.Schema(
    {
      title: { type: String, required: true },
      poster: { type: String, required: true },
    },
    {
      //timestamps: true, ejemplo en clase
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    }
  );
  return db.model('Movies', movieSchema);
};
