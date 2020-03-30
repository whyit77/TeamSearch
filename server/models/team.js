const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		searchDescription: {
			type: String,
			required: true,
		},
		subjectDescription: {
			type: String,
			required: true,
		},
		code: {
			type: String,
			required: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		members: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Team', teamSchema);
