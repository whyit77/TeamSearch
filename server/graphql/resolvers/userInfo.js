// const Event = require('../../models/event');
// const Booking = require('../../models/booking');
const { user } = require("./merge");
const { transformUser, bindUser } = require("./merge");
const User = require("../../models/user");
const Current = require("../../models/current");

module.exports = {
  // FINDS USER BY PASSED IN ID //
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

  // FINDS FIRST USER IN DB // FOR CURRENT ONLY //
  me: async () => {
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }
    // console.log(args);

    try {
      const user = await Current.findOne();
      console.log("ME");

      return transformUser(user);
      // return { ...user._doc, _id: user.id };
    } catch (err) {
      throw err;
    }
  },
  // FOR HOLDING CURRENT LOGGED IN USER DATA // ////////////////////////////////////
  setUser: async (args, req) => {
    console.log("ADD TO CURRENT");

    try {
      // const user = await User.findById(args.userId);
      // if (!creator) {
      //   throw new Error("User not found.");
      // }

      const current = new Current({
        userId: args.userId,
        username: args.username,
        teamId: "", // TO FILL IN ON A DIFFERENT SCREEN
      });

      const result = await current.save();
      console.log(current);

      // let createdTeam = transformTeam(result);

      // console.log(createdTeam);

      // creator.createdTeams.push(team);
      // creator.joinedTeams.push(team);
      // await creator.save();

      return current;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
