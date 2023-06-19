var mongoose = require("mongoose");

var OrdersModel = new mongoose.Schema(
  {
    OrdersName: { type: String, required: true },
    OrdersID: { type: String, required: true },
    Totalprice: { type: String, required: true },
    n: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersModel);
