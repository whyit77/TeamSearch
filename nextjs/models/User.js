/******************

const mongoose = require("mongoose");
//const bcrypt = require("bcryptjs");

// in database
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  desc: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

// UserSchema.pre("save", function(next) {
//   const user = this; // specifically for mongoose

//   if (!user.isModified("password")) {
//     next(); // ignore if not modified
//   } else {
//     // hash password so not in plain text in DB
//     bcrypt.hash(user.password, 10).then(hashedPassword => {
//       user.password = hashedPassword;
//       next();
//     });
//   }
// });

// // check matching password
// UserSchema.method("comparePassword", function(candidatePassword) {
//   const user = this;

//   return bcrypt.compare(candidatePassword, user.password);
// });

module.exports = mongoose.model("User", UserSchema);
****************************/

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId, // connect to events
      ref: "Event"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
