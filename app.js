require("dotenv").config();
const db = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");

const path = require("path");
const router = require("./routes");
const load_routes = function (app) {
  app.use(require("../backend/routes/users"));
  app.use(require("../backend/routes/items"));
  app.use(require("../backend/routes/carts"));
  app.use(express.static("public"));
};

const createApp = async function () {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static(path.join(process.cwd(), "./frontEnd")));
  // Serve static images
  app.use(
    "/image",
    express.static(path.join(process.cwd(), "./frontEnd/image"))
  );
  console.log("App Created !");

  await db.connect(
    "mongodb+srv://sivan0252:YDucINw2cGRBs19I@cluster0.nj84cuz.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Database Connected!");

  // Set up the app configuration
  app.set("port", process.env.PORT || 3000);
  app.set("view engine", "ejs"); // Display setting ejs file
  app.set("views", path.join(process.cwd(), "frontEnd", "views"));
  app.use(express.static(path.join(__dirname, "..", "styles")));
  app.use(express.static("public"));

  // Define your routes here
  app.get("/", (req, res) => {
    res.render("page");
  });

  app.get("/page", (req, res) => {
    res.render("page");
  });

  app.get("/bracelate", (req, res) => {
    res.render("bracelate");
  });

  app.get("/bracelateMen", (req, res) => {
    res.render("bracelateMen");
  });

  app.get("/buy_bracelate", (req, res) => {
    res.render("buy_bracelate");
  });

  app.get("/buyEarrings", (req, res) => {
    res.render("buyEarrings");
  });

  app.get("/buyNecklaces", (req, res) => {
    res.render("buyNecklaces");
  });

  app.get("/buyRing", (req, res) => {
    res.render("buyRing");
  });

  app.get("/cart", (req, res) => {
    res.render("cart");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });

  app.get("/earMen", (req, res) => {
    res.render("earMen");
  });

  app.get("/Earrings", (req, res) => {
    res.render("Earrings");
  });

  app.get("/forgetPassword", (req, res) => {
    res.render("forgetPassword");
  });

  app.get("/necklace", (req, res) => {
    res.render("necklace");
  });

  app.get("/necklaceMen", (req, res) => {
    res.render("necklaceMen");
  });

  app.get("/ring", (req, res) => {
    res.render("ring");
  });

  app.get("/ringformen", (req, res) => {
    res.render("ringformen");
  });

  app.get("/signIn", (req, res) => {
    res.render("signIn");
  });

  app.get("/singup", (req, res) => {
    res.render("singup");
  });

  app.get("/register", (req, res) => {
    res.render("success");
  });

  const Users=require('../Backend/models/UserModel');

  app.post("/register", async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if a user with the same email already exists
      const existingUser = await user.findOne({ email });

      if (existingUser) {
        // If a user with the same email already exists, send a response indicating the conflict
        return res
          .status(409)
          .send("<h1> User with this email already exists </h1>");
      }

      // Retrieve the last user from the database
      const lastUser = await User.findOne({}, {}, { sort: { id: -1 } });

      // Generate a unique numeric ID for the user
      const id = lastUser ? lastUser.id + 1 : 1;
      console.log("Hii")
      // Create a new user object
      const user = new user({
        firstName,
        lastName,
        email,
        password,
      });

      // Save the user to the database
      await user.save();

      // Redirect to the home page or display a success message
      res.redirect("/");
    } catch (error) {
      console.log("Error registering user:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  return app;
};

const PORT = process.env.PORT || 3000;

createApp()
  .then((app) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error starting the server:", error);
  });
