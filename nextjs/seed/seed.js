const connectDB = require("../util/db");
const test1 = require("../models/test1");
const User = require("../models/User");

const data = require("./data");

const seed = () => {
  connectDB()
    .then(() => Promise.all([test1.deleteMany(), User.deleteMany()]))
    .then(() => {
      // create default user
      User.create({
        firstName: "Test",
        lastName: "User",
        email: "testuser@example.com",
        password: "password",
        phone: "0000000000",
        desc: "description"
      });
    })
    .then(() => test1.create(data))
    // .then(res => {
    //   const chain = res.map((item, index) => {
    //     const reviews = data[index].reviews;
    //     const reviewsWithId = reviews.map(review => ({
    //       ...review,
    //       restaurantId: item._id,
    //       username: review.username
    //     }));
    //     return Review.create(reviewsWithId);
    //   });
    //   return Promise.all(chain);
    // })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("error while seeding database.", error);
    })
    .finally(() => process.exit());
};

seed();
