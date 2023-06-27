require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// DB connection
const MONGODB_URL = process.env.MONGODB_URL + process.env.DB_NAME;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB");
    console.log(err);
  });

//const UserModel = require("./models/UserModel");

//var user = new UserModel({
//firstName: "hod",
// lastName: "haim",
// email: "hod123@gmail.com",
// password: "1129",
//});
// user.save()

const ProductModel = require("./models/ProductModel");

var product = new ProductModel({
  productName: "Bryan Necklace",
  productID: "C012",
  pricePerUnit: "1600$",
  categoty: "Necklaces",
});
product.save();

//const OrdersModel = require("./models/OrdersModel");

//var Orders = new OrdersModel({

// UserName:"sivan hod",
//OrdersID: "O002",
// Totalprice:"10000$",
// Orderdate: "11/6/23",
// Orderproduct :"jkdsjhjds,dhdhdhd,dhdhdhd",
// Totalproduct: "2",

//});
//Orders.save();
