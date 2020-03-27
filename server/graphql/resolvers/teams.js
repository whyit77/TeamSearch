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

    req.teamId = "5e7036ad802861124f9bc10c";

    try {
      const team = await Team.findById(req.teamId);

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
        code: randomize("Aa0", 8),
        creator: req.userId,
        members: [creator]
      });

      const result = await team.save();
      let createdTeam = transformTeam(result);

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
