const Team = require("../../models/team");
const User = require("../../models/user");
const Coordinate = require("../../models/coordinate");
const { transformCoordinate } = require("./merge");

module.exports = {
  createCoordinate: async (args, req) => {
    //////////////////////////////////// TODO /////////////////////////////
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    // args.userId = "5e7031dc9c7708107b2bfaa7";
    // args.teamId = "5e96a01304852dfea220a0db";
    // args.alertInput.urgency = "High";
    // args.alertInput.message = "This is a highly urgent alert";

    try {
      let user = await User.findById(args.userId);
      if (!user) {
        throw new Error("User not found.");
      }

      let team = await Team.findById(args.teamId);
      if (!team) {
        throw new Error("Team not found.");
      }

      // onsole.log(user);

      const coor = new Coordinate({
        creator: args.userId,
        latitude: args.coordinateInput.latitude,
        longitude: args.coordinateInput.longitude,
        // gradient: args.coordinateInput.gradient || -1,
        // color: args.coordinateInput.color || '',
      });
      // console.log(coor);

      const result = await coor.save();

      let createdCoordinate = transformCoordinate(result);
      // console.log(createdCoordinate);

      team.coordinates.push(coor);
      await team.save();

      return createdCoordinate;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
