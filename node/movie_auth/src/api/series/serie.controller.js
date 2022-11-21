const Serie = require('./serie.model')

const { setError } = require('../../helpers/error/handle.error')

    const getSeries = async (req, res, next) => {
  try {
    const series = await Serie.find()
    return res.json({
      status: 200,
      message: 'Recovered all Series',
      data: { series }
    })

  } catch (error) {
    return next(setError(500, 'Fail to recover series'))
  }
}

    const postSerie = async (req, res, next) => {
  try {
    const newSerie = new Serie(req.body)
    const newSerieInDB = await newSerie.save()

    return res.json({
      status: 201,
      message: 'Created Serie',
      data: { newSerieInDB }
    })

  } catch (error) {

  }
}

module.exports = { getSeries, postSerie }