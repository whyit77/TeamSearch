const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({
        username: args.userInput.username
      });

      // check existing user
      if (existingUser) {
        console.log("User exists already.");
        throw new Error("User exists already.");
      }
      // check passwords match
      if (args.userInput.password != args.userInput.repassword) {
        console.log("Passwords do not match!");
        throw new Error("Passwords do not match!");
      }
      // check password empty
      else if (args.userInput.password == "") {
        console.log("NO PW GIVEN");
        throw new Error("User validation failed: required fields missing.");
      }
      // check password length
      else if (args.userInput.password.length < 8) {
        console.log("Password too short");
        throw new Error("Password must be at least 8 characters long.");
      }
      // check phone number length
      else if (args.userInput.phone.length < 10) {
        console.log("Phone number too short");
        throw new Error("Phone number is invalid.");
      }

      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
        username: args.userInput.username,
        email: args.userInput.email,
        firstName: args.userInput.firstName,
        lastName: args.userInput.lastName,
        password: hashedPassword,
        phone: args.userInput.phone,
        desc: args.userInput.desc
      });

      const result = await user.save();

      console.log("CREATE USER");

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login: async ({ username, password }) => {
    const user = await User.findOne({ username: username });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      "F320DF1F1D727FF73D773C79FBA43251ED40BDA3C329FF75D64B34C88034F386",
      {
        expiresIn: "1h"
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
};
