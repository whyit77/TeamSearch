const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const teamResolver = require('./teams');
const userInfoResolver = require('./userInfo');
const pinResolver = require('./pin');
const alertResolver = require('./alert');
const coordinateResolver = require('./coordinate');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...teamResolver,
  ...userInfoResolver,
  ...pinResolver,
  ...alertResolver,
  ...coordinateResolver,
};

module.exports = rootResolver;
