const connectDB = require("../util/db");
const test1 = require("../models/test1");

const data = require("./data");

const seed = () => {
  connectDB()
    .then(() => {
      return test1.find().estimatedDocumentCount();
    })
    .then(count => {
      if (count > 0) {
        throw new Error("Cache Collection is not empty.");
      }

      return test1.create(data); // create multiple docs from data.js
    })
    .then(() => console.log("DB Seeded."))
    .catch(error => {
      console.log("Error while seeding database", error);
    })
    .finally(() => process.exit());
};

seed();
