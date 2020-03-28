// const Event = require('../../models/event');
// const Booking = require('../../models/booking');
const { user } = require("./merge");
const User = require("../../models/user");

module.exports = {
  // FINDS USER BY PASSED IN ID //
  getUser: async (args, req) => {
    console.log("GETUSER");
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }

    // TODO: NEED CURRENT LOGGED IN USER ID ///
    try {
      const user = await User.findById({ _id: args.userId });

      // console.log(user.createdTeams);

      return {
        ...user._doc,
        _id: user.id
      };
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

  // FINDS FIRST USER IN DB //
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
