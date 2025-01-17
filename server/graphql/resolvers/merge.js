const Event = require("../../models/event");
const Team = require("../../models/team");
const User = require("../../models/user");
const Alert = require("../../models/alert");
const Pin = require("../../models/pin");
const Coordinate = require("../../models/coordinate");
const { dateToString } = require("../../helpers/date");

const events = async (eventIds) => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    return events.map((event) => {
      return transformEvent(event);
    });
  } catch (err) {
    throw err;
  }
};

const teams = async (teamIds) => {
  try {
    const teams = await Team.find({ _id: { $in: teamIds } });
    return teams.map((team) => {
      return transformTeam(team);
    });
  } catch (err) {
    throw err;
  }
};

const users = async (userIds) => {
  try {
    const users = await User.find({ _id: { $in: userIds } });
    return users.map((user) => {
      return transformUser(user);
    });
  } catch (err) {
    throw err;
  }
};

const alerts = async (alertIds) => {
  try {
    const alerts = await Alert.find({ _id: { $in: alertIds } });
    return alerts.map((alert) => {
      return transformAlert(alert);
    });
  } catch (err) {
    throw err;
  }
};

const pins = async (pinIds) => {
  try {
    const pins = await Pin.find({ _id: { $in: pinIds } });
    return pins.map((pin) => {
      return transformPin(pin);
    });
  } catch (err) {
    throw err;
  }
};

const coordinates = async (coorIds) => {
  try {
    const coordinates = await Coordinate.find({ _id: { $in: coorIds } });
    return coordinates.map((coor) => {
      return transformCoordinate(coor);
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async (eventId) => {
  try {
    const event = await Event.findById(eventId);
    return transformEvent(event);
  } catch (err) {
    throw err;
  }
};

const singleUser = async (UserId) => {
  try {
    const user = await User.findById(UserId);
    return transformUser(user);
  } catch (err) {
    throw err;
  }
};

const transformUser = (user) => {
  return {
    ...user._doc,
    _id: user.id,
    createdEvents: events.bind(this, user._doc.createdEvents),
    joinedTeams: teams.bind(this, user._doc.joinedTeams),
    createdTeams: teams.bind(this, user._doc.createdTeams),
  };
};

const transformEvent = (event) => {
  return {
    ...event._doc,
    _id: event.id,
    date: dateToString(event._doc.date),
    creator: singleUser.bind(this, event.creator),
  };
};

const transformTeam = (team) => {
  return {
    ...team._doc,
    _id: team.id,
    createdAt: dateToString(team._doc.createdAt),
    updatedAt: dateToString(team._doc.updatedAt),
    creator: singleUser.bind(this, team.creator),
    members: users.bind(this, team._doc.members),
    alerts: alerts.bind(this, team._doc.alerts),
    pins: pins.bind(this, team._doc.pins),
    coordinates: coordinates.bind(this, team._doc.coordinates),
  };
};

const transformAlert = (alert) => {
  return {
    ...alert._doc,
    _id: alert.id,
    creator: singleUser.bind(this, alert.creator),
    createdAt: dateToString(alert._doc.createdAt),
    updatedAt: dateToString(alert._doc.updatedAt),
  };
};

const transformPin = (pin) => {
  return {
    ...pin._doc,
    _id: pin.id,
    createdAt: dateToString(pin._doc.createdAt),
    updatedAt: dateToString(pin._doc.updatedAt),
    creator: singleUser.bind(this, pin.creator),
  };
};

const transformCoordinate = (coor) => {
  return {
    ...coor._doc,
    _id: coor.id,
    creator: singleUser.bind(this, coor.creator),
    createdAt: dateToString(coor._doc.createdAt),
    updatedAt: dateToString(coor._doc.updatedAt),
  };
};

const transformBooking = (booking) => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: singleUser.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking._doc.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt),
  };
};

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;
exports.transformTeam = transformTeam;
exports.transformUser = transformUser;
exports.transformAlert = transformAlert;
exports.transformPin = transformPin;
exports.transformCoordinate = transformCoordinate;

// exports.user = user;
// exports.events = events;
