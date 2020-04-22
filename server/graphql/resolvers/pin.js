const Team = require("../../models/team");
const User = require("../../models/user");
const Pin = require("../../models/pin");
const { transformPin, bindUser } = require("./merge");
const randomize = require("randomatic");

module.exports = {
  createPin: async (args, req) => {
    console.log("CREATE PIN");
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    // TODO: NEED CURRENT LOGGED IN USER ID ///
    // args.userId = "5e7031dc9c7708107b2bfaa7";
    // args.teamId = "5e96a01304852dfea220a0db";
    let creator;
    try {
      let user = await User.findById(args.userId);
      if (!user) {
        throw new Error("User not found.");
      }

      let team = await Team.findById(args.teamId);
      if (!team) {
        throw new Error("Team not found.");
      }

      const pin = new Pin({
        title: args.pinInput.title,
        description: args.pinInput.description,
        latitude: args.pinInput.latitude,
        longitude: args.pinInput.longitude,
        creator: args.userId,
      });

      const result = await pin.save();
      console.log(pin);

      let createdPin = transformPin(result);

      console.log(createdPin);

      team.pins.push(pin);
      await team.save();

      return createdPin;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
