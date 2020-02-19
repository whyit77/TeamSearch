const jwt = require("jsonwebtoken");
const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const User = require("../../models/User");
const config = require("../../config");

app.post("*", (req, res) => {
  let finalUser;
  connectDB()
    // find user by email
    .then(() => User.findOne({ email: req.body.email }))
    .then(user => {
      if (!user) {
        throw new Error("No user found.");
      }

      finalUser = user;
      return user.comparePassword(req.body.password); // check matching password
    })
    .then(isPasswordCorrect => {
      if (!isPasswordCorrect) {
        throw new Error("Invalid password!");
      }

      // use jsonwebtokens - add uniqueness
      return jwt.sign({ userId: finalUser._id }, config.JWT_SECRET, {
        //expiresIn: "1m" // stay logged in for 1 minute
      });
    })
    // token from jwt calls
    .then(token => {
      res.status(200).json({
        result: {
          firstName: finalUser.firstName,
          lastName: finalUser.lastName,
          email: finalUser.email,
          token
        }
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err.message
      });
    });
});

module.exports = app;
