var mongoose = require("mongoose");

var OrdersModel = new mongoose.Schema(
  {
    UserName: { type: String, required: true },
    OrdersID: { type: String, required: true },
    Totalprice: { type: String, required: true },
    Orderdate: { type: String, required: true },
    Orderproduct: { type: String, required: true },
    Totalproduct: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrdersModel);
