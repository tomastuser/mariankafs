const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AktualitaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  id: {
    type: String,
    required: false,
  },
});

module.exports = Aktualita = mongoose.model('aktualita', AktualitaSchema);
