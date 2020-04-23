const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const coordinateSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  gradient: {
    type: Number,
    required: false
  },
  color: {
    type: String,
    required: false
  },
},
  { timestamps: true }
);

module.exports = mongoose.model("Coordinate", coordinateSchema);
