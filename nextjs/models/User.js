const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    userId: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    description: String,
    // profilePicture: Image

})

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