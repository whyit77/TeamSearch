const Team = require("../../models/team");
const User = require("../../models/user");
const Alert = require("../../models/alert");
const { transformAlert } = require("./merge");

module.exports = {
  createAlert: async (args, req) => {
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

      // console.log(user);

      const alert = new Alert({
        creator: args.userId,
        urgency: args.alertInput.urgency,
        message: args.alertInput.message,
        title: args.alertInput.title,
      });
      // console.log(alert);

      const result = await alert.save();

      let createdAlert = transformAlert(result);
      // console.log(createdAlert);

      team.alerts.push(alert);
      await team.save();

      return createdAlert;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
