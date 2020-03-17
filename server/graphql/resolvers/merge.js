const Event = require('../../models/event');
const Team = require('../../models/team');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');

const events = async eventIds => {
	try {
		const events = await Event.find({ _id: { $in: eventIds } });
		return events.map(event => {
			return transformEvent(event);
		});
	} catch (err) {
		throw err;
	}
};

const teams = async teamIds => {
	try {
		const teams = await Team.find({ _id: { $in: teamIds } });
		return teams.map(team => {
			return transformTeam(team);
		});
	} catch (err) {
		throw err;
	}
};

const singleEvent = async eventId => {
	try {
		const event = await Event.findById(eventId);
		return transformEvent(event);
	} catch (err) {
		throw err;
	}
};

const user = async userId => {
	try {
		const user = await User.findById(userId);
		return transformUser(user);
	} catch (err) {
		throw err;
	}
};

const transformUser = user => {
	return {
		...user._doc,
		_id: user.id,
		createdEvents: events.bind(this, user._doc.createdEvents),
		joinedTeams: teams.bind(this, user._doc.joinedTeams),
		createdTeams: teams.bind(this, user._doc.createdTeams),
	};
};

const transformEvent = event => {
	return {
		...event._doc,
		_id: event.id,
		date: dateToString(event._doc.date),
		creator: user.bind(this, event.creator),
	};
};

const transformTeam = team => {
	return {
		...team._doc,
		_id: team.id,
		createdAt: dateToString(team._doc.createdAt),
		updatedAt: dateToString(team._doc.updatedAt),
		creator: user.bind(this, team.creator),
		members: user.bind(team._doc.members),
	};
};

const transformBooking = booking => {
	return {
		...booking._doc,
		_id: booking.id,
		user: user.bind(this, booking._doc.user),
		event: singleEvent.bind(this, booking._doc.event),
		createdAt: dateToString(booking._doc.createdAt),
		updatedAt: dateToString(booking._doc.updatedAt),
	};
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
exports.transformTeam = transformTeam;
exports.transformUser = transformUser;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
