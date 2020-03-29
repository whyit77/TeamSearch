const Team = require("../../models/team");
const User = require("../../models/user");
const { transformTeam, bindUser } = require("./merge");
const randomize = require("randomatic");

module.exports = {
  teams: async () => {
    try {
      const teams = await Team.find();
      return teams.map(team => {
        return transformTeam(team);
      });
    } catch (err) {
      throw err;
    }
  },
  getTeam: async (args, req) => {
    console.log("GET TEAM");
    // if (!req.isAuth) {
    //   throw new Error("Unauthenticated!");
    // }
    // TODO: NEED CURRENT TEAM ID ///
    // req.teamId = "5e7f1397e0c8ce4a247e7cad";

    try {
      const team = await Team.findById(args.teamId);

      console.log(team);
      return transformTeam(team);
    } catch (err) {
      throw err;
    }
  },
  createTeam: async (args, req) => {
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    // TODO: NEED CURRENT LOGGED IN USER ID ///
    req.userId = "5e7b1daaa2b8f6182851c49e";
    let creator;
    try {
      creator = await User.findById(req.userId);
      if (!creator) {
        throw new Error("User not found.");
      }

      const team = new Team({
        teamName: args.teamInput.teamName,
        searchDescription: args.teamInput.searchDescription,
        subjectDescription: args.teamInput.subjectDescription,
        radius: args.teamInput.radius,
        code: randomize("Aa0", 8),
        creator: req.userId,
        members: [creator]
      });

      const result = await team.save();
      console.log(team);

      let createdTeam = transformTeam(result);

      console.log(createdTeam);

      creator.createdTeams.push(team);
      creator.joinedTeams.push(team);
      await creator.save();

      return createdTeam;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
