const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema({
  title: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true
  },
  explanation: {
    type: String,
  },
  examples: {
    type: [String]
  },
  contribution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Word", wordSchema)