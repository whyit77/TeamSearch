const connectDB = require("../util/db");
const User = require("../models/User");
const test1 = require("../models/test1");

const data = require("./data");

const seed = () => {
  connectDB()
    .then(() => Promise.all([test1.deleteMany(), User.deleteMany()]))
    .then(() =>
      // create default user
      User.create({
        firstName: "Test",
        lastName: "User",
        email: "testuser@example.com",
        password: "password"
      })
    )
    .then(() => test1.create(data))
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("error while seeding database.", error);
    })
    .finally(() => process.exit());
};

seed();
