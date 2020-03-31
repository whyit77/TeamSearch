// const Event = require('../../models/event');
// const Booking = require('../../models/booking');
const { user, transformTeam, transformUser } = require('./merge');
const User = require('../../models/user');
const Team = require('../../models/team');

module.exports = {
	getUser: async (args, req) => {
		console.log('GETUSER');
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
	me: async () => {
		// if (!req.isAuth) {
		//   throw new Error("Unauthenticated!");
		// }

		try {
			const user = await User.findOne();
			console.log('ME');
			return { ...user._doc, _id: user.id };
		} catch (err) {
			throw err;
		}
	},
};
