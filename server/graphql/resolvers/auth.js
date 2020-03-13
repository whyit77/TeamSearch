const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({
        username: args.userInput.username
      });
      if (existingUser) {
        console.log("User exists already.");
        throw new Error("User exists already.");
      }
      if (args.userInput.password != args.userInput.repassword) {
        console.log("Passwords NO MATCHY");
        throw new Error("Passwords do not match!");
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
