const mongoose = require('mongoose');

const bookedSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  tutorId: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('booked', bookedSchema);
