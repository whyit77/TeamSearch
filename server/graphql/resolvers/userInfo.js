// const Event = require('../../models/event');
// const Booking = require('../../models/booking');
const { user } = require("./merge");
const User = require("../../models/user");

module.exports = {
  getUser: async (args, req) => {
    console.log("GETUSER");
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }

    try {
      const user = await User.findById({ _id: args.userId });

      return transformUser(user);
    } catch (err) {
      throw err;
    }
  },
  // getUser: async (args, req) => {
  //   console.log("GETUSER");
  //   // if (!req.isAuth) {
  //   //   throw new Error("Unauthenticated!");
  //   // }

  //   // console.log(req.userId);
  //   console.log(args.username);

  //   try {
  //     const user = await User.findOne({ username: args.username });

  //     return {
  //       ...user._doc,
  //       _id: user.id
  //     };
  //   } catch (err) {
  //     throw err;
  //   }
  // },
  me: async () => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }
    // console.log(args);

    try {
      const user = await User.findOne();
      console.log("ME");
      return { ...user._doc, _id: user.id };
    } catch (err) {
      throw err;
    }
  }
};
