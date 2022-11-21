const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('./user.model')
const { setError } = require('../../helpers/error/handle.error')

const register = async (req, res, next) => {
  try {
    // crear nuevo registro/usario
    const newUser = new User(req.body)
    //comprabar si no está duplicado por nombre 
    const userDuplicate = await User.findOne({ username: newUser.username })
    // si no existe, mensaje ya existe
    if (userDuplicate) return next('User already exists')

    // si existe, lo guarda
    const newUserDB = newUser.save()
    return res.json({
      status: 201,
      message: 'user registered',
      data: newUserDB
    })
  } catch (error) {
    return next(setError(500, 'User registered fail'))
  }
}

const login = async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ username: req.body.username })
    // compara la contraseña registrada
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        //contraseña manchada 
      userInfo.password = null
      //genera una firma, el elemento existe
      // token método que cuando genera la firma , necesita el elemento(firma para el usario) 
      // y palabra secreta en la aplicación
      const token = jwt.sign(
        // pasar tantos datos como se desee
        {
          id: userInfo._id,
          username: userInfo.username
        },
        // secretKey en base a la contraseña guardada en .env
        req.app.get("secretKey"),
        // tiempo que en expirar el token
        { expiresIn: '1h' }
      )
      return res.json({
        // si es correcto, devolver status, messege, user, token
        status: 200,
        message: 'welcome User',
        user: userInfo,
        token: token
      })
      // devolver el error si no es correcto
    } else {
      return next('Incorrect password')
    }
    // catchear el error
  } catch (error) {
    return next(setError(500, 'User login fail'))
  }
}

module.exports = { register, login }