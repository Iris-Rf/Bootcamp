const UserRoutes = require('express').Router()

const { register, login } = require('./user.controller')

//ejecutar register y login
UserRoutes.post('/register', register)
UserRoutes.post('/login', login)

module.exports = UserRoutes