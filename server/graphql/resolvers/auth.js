const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

module.exports = {
  createUser: async args => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        console.log("ERR");
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      const user = new User({
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
  login: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "F320DF1F1D727FF73D773C79FBA43251ED40BDA3C329FF75D64B34C88034F386",
      {
        expiresIn: "1h"
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  }
};
