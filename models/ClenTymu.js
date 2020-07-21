const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClenTymuSchema = new Schema({
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

module.exports = ClenTymu = mongoose.model('clentymu', ClenTymuSchema);
