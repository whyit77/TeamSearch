const Team = require("../../models/team");
const User = require("../../models/user");
const { transformTeam, bindUser } = require("./merge");
const randomize = require("randomatic");

module.exports = {
  teams: async () => {
    try {
      const teams = await Team.find();
      return teams.map((team) => {
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

      // console.log(team);
      return transformTeam(team);
    } catch (err) {
      throw err;
    }
  },
  // FINDS USER BY PASSED IN ID and CREATE TEAM UNDER THEM //
  createTeam: async (args, req) => {
    console.log("CREATE TEAM");
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    // TODO: NEED CURRENT LOGGED IN USER ID ///
    req.userId = "5e815389f1088e659c4bddc4";
    let creator;
    try {
      const creator = await User.findById(args.userId);
      if (!creator) {
        throw new Error("User not found.");
      }

      const team = new Team({
        teamName: args.teamInput.teamName,
        searchDescription: args.teamInput.searchDescription,
        subjectDescription: args.teamInput.subjectDescription,
        radius: args.teamInput.radius,
        code: randomize("Aa0", 8),
        creator: args.userId,
        members: [creator],
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
  },
  joinTeam: async (args, req) => {
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    // req.userId = '5e810bca46838b520f986577';
    try {
      let user = await User.findById(args.userId);
      if (!user) {
        throw new Error("User not found.");
      }

      let team = await Team.findOne({ code: args.teamCode });
      if (!team) {
        throw new Error("Team not found.");
      }

      team.members.push(user);
      await team.save();

      user.joinedTeams.push(team);
      await user.save();

      return transformTeam(team);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  addUserToTeam: async (args, req) => {
    // if (!req.isAuth) {
    // 	throw new Error('Unauthenticated!');
    // }

    /////////////////////////////////////////////
    args.username = "whyit2";
    args.teamId = "5e891ee7be2c6d8e45403855";

    try {
      let user = await User.findOne({ username: args.username });
      if (!user) {
        throw new Error("User not found.");
      }

      let team = await Team.findById(args.teamId);
      if (!team) {
        throw new Error("Team not found.");
      }

      team.members.push(user);
      await team.save();

      user.joinedTeams.push(team);
      await user.save();

      return transformTeam(team);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
