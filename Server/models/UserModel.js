var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;
// const CustomerSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   tel: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   details: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// module.exports = mongoose.model("Customer", CustomerSchema);
