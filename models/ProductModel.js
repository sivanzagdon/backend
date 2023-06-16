var mongoose = require("mongoose");

var ProductModel = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productID: { type: String, required: true },
    price: { type: String, required: true },
    nnn: { type: String, required: true },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Product", ProductModel);
