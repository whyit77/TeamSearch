const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

// in database
const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

UserSchema.pre("save", function(next) {
  const user = this; // specifically for mongoose

  if (!user.isModified("password")) {
    next(); // ignore if not modified
  } else {
    // hash password so not in plain text in DB
    bycrypt.hash(user.password, 10).then(hashedPassword => {
      user.password = hashedPassword;
      next();
    });
  }
});

// check matching password
UserSchema.method("comparePassword", function(candidatePassword) {
  const user = this;

  return bycrypt.compare(candidatePassword, user.password);
});

module.exports = mongoose.model("User", UserSchema);
