// server.js

const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user"); // ייבוא מודל המשתמש

const app = express();
const PORT = 3000;

mongoose.connect(
  "mongodb+srv://sivan0252:YDucINw2cGRBs19I@cluster0.nj84cuz.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST creating a new user
app.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if the user already exists in the database
  User.findOne({ email }, (err, existingUser) => {
    if (err) {
      return res.status(500).json({ error: "An error occurred" });
    }
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // creating a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    // user save in data base
    newUser.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({ error: "An error occurred" });
      }
      return res
        .status(200)
        .json({ message: "User registered successfully", user: savedUser });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
