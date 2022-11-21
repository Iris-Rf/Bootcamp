const mongoose = require('mongoose')

    const serieSchema = new mongoose.Schema(

  {
    title: { type: String, required: true },
    year: { type: Number },
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('series', serieSchema)