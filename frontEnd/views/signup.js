require("dotenv").config();
var express = require("express");
var app = express();
var mongoose = require("mongoose");

// חיבור לבסיס הנתונים
var MONGODB_URL = process.env.MONGODB_URL + process.env.DB_NAME;

mongoose
  .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Cannot connect to MongoDB:", err);
  });

// קביעת סכימת היוזר
var userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// מודל היוזר
var UserModel = mongoose.model("User", userSchema);

// מניעת הבאת המידע בפורמט JSON
app.use(express.json());

// מסלול הכנסת משתמש חדש
app.post("/register", function (req, res) {
  var newUser = new UserModel(req.body);
  newUser
    .save()
    .then(() => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
});

// האזנה לפורט 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
