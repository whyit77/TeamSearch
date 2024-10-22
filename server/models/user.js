const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	joinedTeams: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team',
		},
	],
	createdTeams: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Team',
		},
	],
	createdEvents: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Event',
		},
	],
});

module.exports = mongoose.model('User', userSchema);
