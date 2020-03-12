const { buildSchema } = require('graphql');

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

type Team {
  _id: ID!
  title: String!
  description: String!
  code: String!
  creator: User!
  members: [User!]
  createdAt: String!
  updatedAt: String!
}

type User {
  _id: ID!
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  phone: String!
  desc: String
  joinedTeams: [Team!]
  createdTeams: [Team!]
  createdEvents: [Event!]
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input TeamInput {
  title: String!
  description: String
}

input UserInput {
  email: String!
  firstName: String!
  lastName: String!
  password: String!
  phone: String!
  desc: String
}

type RootQuery {
    events: [Event!]!
    bookings: [Booking!]!
    teams: [Team!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    createTeam(teamInput: TeamInput): Team
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
