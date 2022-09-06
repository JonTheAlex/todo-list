const mongoose = require('mongoose')

// Schema to store user preferred settings

const SettingSchema = new mongoose.Schema({
  font: String,
  color: String,
  userId: String
})

module.exports = mongoose.model('Setting', SettingSchema)