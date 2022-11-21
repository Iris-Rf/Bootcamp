const MovieRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const { getMovies, postMovie } = require('./movie.controller')


MovieRoutes.get('/', [isAuth], getMovies)
MovieRoutes.post('/', [isAuth], postMovie)

module.exports = MovieRoutes