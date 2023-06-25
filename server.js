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
  firstName: "hod",
  lastName: "haim",
  email: "hod123@gmail.com",
  password: "1129",
});
user.save()

//const ProductModel = require("./models/ProductModel");

//var product = new ProductModel({
  //productName: "Seifan Bracelate",
  //productID: "D006",
  //pricePerUnit: "15000$",
  //categoty: "bracelate"
//});
//product.save();

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