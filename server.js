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

//const UserModel = require("./models/UserModel");

//var user = new UserModel({
 // firstName: "sivan",
 // lastName: "zg",
 // email: "sivan@gmail.com",
 // password: "4567",
//});
//user.save()

const ProductModel = require("./models/ProductModel");

var product = new ProductModel({
  productName: "ring",
  productID: "1234",
  pricePerUnit: "89",
  nnn: "rrr"
});
product.save();