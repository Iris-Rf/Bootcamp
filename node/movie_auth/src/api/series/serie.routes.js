const SerieRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middleware')

const { getSeries, postSerie } = require('./serie.controller')


MovieRoutes.get('/', [isAuth], getSeries)
MovieRoutes.post('/', [isAuth], postSerie)

module.exports = SerieRoutes