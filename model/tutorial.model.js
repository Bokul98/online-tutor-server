const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  image: { type: String, required: true },
  language: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  review: { type: Number, default: 0 }
}, { timestamps: true })

module.exports = mongoose.model('tutors', tutorialSchema)
