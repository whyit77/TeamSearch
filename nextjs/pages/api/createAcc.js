const app = require("../../util/configureApi");
const connectDB = require("../../util/db");
const User = require("../../models/User");

app.post("*", (req, res) => {
  connectDB()
    // check if user already has an account (based on email)
    .then(() => User.findOne({ email: req.body.email }))
    .then(user => {
      if (!user) {
        // create new user
        const { email, firstName, lastName, password, phone, desc } = req.body;
        return User.create({
          firstName,
          lastName,
          email,
          password,
          phone,
          desc
        });
      }
      throw new Error("Account already exists.");
    })
    .then(result => {
      res.status(200).json({
        result
      });
    })
    .catch(err => {
      res.status(err.statusCode || 500).json({
        error: err.message
      });
    });
});

module.exports = app;
