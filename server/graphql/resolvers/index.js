const authResolver = require("./auth");
const eventsResolver = require("./events");
const bookingResolver = require("./booking");
const userInfoResolver = require("./userInfo");

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...userInfoResolver
};

module.exports = rootResolver;
