// requerir librerías 
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// cremos el esquema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emoji: { type: String, required: true }
},
  {
    timestamps: true
  }
)

// antes de guardar (pre. save) crear función para que continue 
userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10)
  next()
})

module.exports = mongoose.model("users", userSchema)