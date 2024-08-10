const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hireRequestSchema = new Schema({
  size: {
    type: String,
    required: true,
  },
  amenities: [String],
  customRoute: String,
  userDetails: {
    name: String,
    contact: String
  }
});

module.exports = mongoose.model('HireRequest', hireRequestSchema);
