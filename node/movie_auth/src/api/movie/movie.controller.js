const Movie = require('./movie.model')

const { setError } = require('../../helpers/error/handle.error')

  const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find()
    return res.json({
      status: 200,
      message: 'Recovered all Movies',
      
      data: { movies }
    })

  } catch (error) {
    return next(setError(500, 'Fail to recover movies'))
  }
}

  const postMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body)
    const newMovieInDB = await newMovie.save()

    return res.json({
      status: 201,
      message: 'Created Movie',
      data: { newMovieInDB }
    })

  } catch (error) {

  }
}

module.exports = { getMovies, postMovie }