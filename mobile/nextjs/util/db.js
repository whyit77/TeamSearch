const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let isConnected;

// REMOVE PASSWORD BEFORE PUSHING <password>
// REPLACE PASSWORD TO RUN
const DB_URL =
	'mongodb+srv://wzeimis:7F28f5b350@localcluster-iyds9.mongodb.net/test?retryWrites=true&w=majority';

const connectToDatabase = () => {
	if (isConnected) {
		console.log('Use existing database connection.');
		return Promise.resolve();
	}

	console.log('Using new database connection.');
	return mongoose.connect(DB_URL, { useNewUrlParser: true }).then(db => {
		isConnected = db.connections[0].readyState;
	});
};

module.exports = connectToDatabase;
