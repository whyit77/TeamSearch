const Team = require('../../models/team');
const User = require('../../models/user');
const { transformTeam, bindUser } = require('./merge');
const randomize = require('randomatic');

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
		console.log('GET TEAM');
		// if (!req.isAuth) {
		//   throw new Error("Unauthenticated!");
		// }

		req.teamId = '5e7036ad802861124f9bc10c';

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

		req.userId = '5e7031dc9c7708107b2bfaa7';
		let creator;
		try {
			creator = await User.findById(req.userId);
			if (!creator) {
				throw new Error('User not found.');
			}

			const team = new Team({
				title: args.teamInput.title,
				searchDescription: args.teamInput.searchDescription,
				subjectDescription: args.teamInput.subjectDescription,
				code: randomize('Aa0', 8),
				creator: req.userId,
				members: [creator],
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
	},
	joinTeam: async (args, req) => {
		// if (!req.isAuth) {
		// 	throw new Error('Unauthenticated!');
		// }

		req.userId = '5e810bca46838b520f986577';
		try {
			let user = await User.findById(req.userId);
			if (!user) {
				throw new Error('User not found.');
			}

			let team = await Team.findOne({ code: args.teamCode });
			if (!team) {
				throw new Error('Team not found.');
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
