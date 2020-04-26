const Team = require("../../models/team");
const User = require("../../models/user");
const Coordinate = require("../../models/coordinate");
const { transformCoordinate } = require("./merge");

module.exports = {
  createCoordinate: async (args, req) => {
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    try {
      let user = await User.findById(args.userId);
      if (!user) {
        throw new Error("User not found.");
      }

      let team = await Team.findById(args.teamId);
      if (!team) {
        throw new Error("Team not found.");
      }

      const coor = new Coordinate({
        creator: args.userId,
        latitude: args.coordinateInput.latitude,
        longitude: args.coordinateInput.longitude,
        weight: args.coordinateInput.weight,
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
