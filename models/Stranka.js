const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StrankaSchema = new Schema({
  name: {
    type: String,
  },
  text: {
    type: String,
  },
  image: {
    type: Object,
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

module.exports = Stranka = mongoose.model('strankaschema', StrankaSchema);
