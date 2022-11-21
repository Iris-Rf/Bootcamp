// exportamos dependencias
const express = require('express')
const cors = require('cors')

const { connect } = require('./helpers/db/connect')

const UserRoutes = require('./api/user/user.routes')
// const BookRoutes = require('./api/book/book.routes')
const MovieRoutes = require('./api/movie/movie.routes')

const { setError } = require('./helpers/error/handle.error')

connect()

// process.env.PORT sustituimos por línea 42, limpiamos el código

// Es lo mismo que const server = express()
const app = express()

// Las cobeceras siempre son iguales en todos los proyectos, reutilizar  (si no hay cambios en la configuración)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }))

app.use(express.json({ limit: '1mb' }))

app.use(express.urlencoded({ limit: '1mb', extended: true }))

app.set('secretKey', process.env.SECRET_KEY_JWT)

app.use('/api/users', UserRoutes)
app.use('/api/movies', MovieRoutes)

app.use('*', (req, res, next) => next(setError(404, 'Route not found')))

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error');
})

app.disable('x-powered-by')

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: http://localhost:${process.env.PORT}`);
});
