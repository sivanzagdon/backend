require("dotenv").config();


// DB connection
var MONGODB_URL = process.env.MONGODB_URL + process.env.DB_NAME;
var mongoose = require("mongoose");

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log("Connected to mongodb successfully");
    },
    (err) => {
      console.error("Cannot connect to mongo server " );
      console.log(err)
    }
  );

const UserModel = require("./models/UserModel");

var user = new UserModel({
  firstName: "shir",
  lastName: "zohar",
  email: "shirn@gmail.com",
  password: "1222",
});
user.save()