const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const teamResolver = require('./teams');
const userInfoResolver = require('./userInfo');
const pinResolver = require('./pin');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...teamResolver,
  ...userInfoResolver,
  ...pinResolver,
};

module.exports = rootResolver;
