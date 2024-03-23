const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 30
  },
  username: {
    type: String,
    minLength: 3,
    maxLength: 30,
    unique: true,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)