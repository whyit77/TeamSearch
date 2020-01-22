const mongoose = require("mongoose");

// item in mongo database
const Test1Schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model("test1", Test1Schema);
