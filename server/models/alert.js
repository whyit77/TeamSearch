const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const alertSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  urgency: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Alert', alertSchema);
