const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    teamName: {
      type: String,
      required: true,
    },
    searchDescription: {
      type: String,
      required: true,
    },
    subjectDescription: {
      type: String,
      required: true,
    },
    radius: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    alerts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Alert",
      },
    ],
    pins: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pin",
      },
    ],
    coordinates: [
      {
        type: Schema.Types.ObjectId,
        ref: "Coordinate",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Team", teamSchema);
