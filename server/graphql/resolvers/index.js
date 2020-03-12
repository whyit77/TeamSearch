const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const teamResolver = require('./teams');

const rootResolver = {
	...authResolver,
	...eventsResolver,
	...bookingResolver,
	...teamResolver,
};

module.exports = rootResolver;
