const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const currentSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  teamId: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Current", currentSchema);
