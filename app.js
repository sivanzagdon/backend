

require("dotenv").config();
const db = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");


const path = require("path");
const load_routes = function (app) {
  app.use(require("../backend/routes/users"));
  app.use(require("../backend/routes/items"));
  app.use(require("../backend/routes/carts"));
  app.use(express.static("public"));
 
};

const createApp = async function () {
  const app = await express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.static(path.join(process.cwd(), "./frontEnd")));
  // Serve static images
  app.use(
    "frontEnd/image/",
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
  app.set("view engine", "ejs");
  app.set("views", path.join(process.cwd(), "frontEnd", "views"));
  app.use(express.static(path.join(__dirname, "..", "styles")));
  app.use(express.static("public"));

  //await load_routes(app);

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

  return app;
};

module.exports = { db, createApp };


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

 