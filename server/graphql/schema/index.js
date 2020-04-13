const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type Alert {
  _id: ID!
  creator: User!
  urgency: String!
  message: String!
}

type Team {
  _id: ID!
  teamName: String!
  searchDescription: String!
  subjectDescription: String!
  radius: Int!
  code: String!
  creator: User!
  members: [User!]
  alerts: [Alert]
  createdAt: String!
  updatedAt: String!
}

type User {
  _id: ID!
  username: String!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  phone: String!
  description: String
  joinedTeams: [Team!]
  createdTeams: [Team!]
  createdEvents: [Event!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

type Current {
  userId: String!
  username: String!
  teamId: String!
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input TeamInput {
  teamName: String!
  searchDescription: String!
  subjectDescription: String!
  radius: Int!
}

input AlertInput {
  urgency: String!
  message: String!
}

input UserInput {
  username: String!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  repassword: String!
  phone: String!
  description: String
}

type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
    teams: [Team!]!
    login(username: String!, password: String!): AuthData!
    getUser(userId: String!): User!
    getTeam(teamId: String!): Team!
    me: Current!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    createTeam(userId: String!, teamInput: TeamInput): Team
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
    joinTeam(userId: String!, teamCode: String!): Team
    addUserToTeam(username: String!, teamId: String!): Team
    createAlert(userId: String!, teamId: String!, alertInput: AlertInput): Alert
    setUser(userId: String!, username: String!): Current!
    setTeam(userId: String!, teamId: String!): Current!
    logout(username: String!): Current
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
