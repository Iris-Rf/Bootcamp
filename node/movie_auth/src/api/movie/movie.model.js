const mongoose = require('mongoose')

  const movieSchema = new mongoose.Schema(

  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('movies', movieSchema)