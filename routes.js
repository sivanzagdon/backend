const express = require("express");
const app = express();
const path = require("path");

// מיקום התיקייה "frontEnd"
const staticFilesPath = path.join(__dirname, "frontEnd");

// שימוש ב- express.static עבור התיקייה "frontEnd"
app.use(express.static(staticFilesPath));

// מגדירים את הראוטים לפי קבצי ה-HTML
app.get("/Earrings", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "Earrings.html"));
});

app.get("/bracelate", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "bracelate.html"));
});

app.get("/bracelateMem", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "bracelateMen.html"));
});

app.get("/buy_bracelate", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "buy_bracelate.html"));
});

app.get("/buyEarrings", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "buyEarrings.html"));
});

app.get("/buyNecklaces", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "buyNecklaces.html"));
});

app.get("/buyRing", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "buyRing.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "cart.html"));
});

app.get("/earMen", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "earMen.html"));
});

app.get("/forgetPassword", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "forgetPassword.html"));
});

app.get("/necklace", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "necklace.html"));
});

app.get("/necklaceMen", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "necklaceMen.html"));
});

app.get("/page", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "page.html"));
});

app.get("/ring", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "ring.html"));
});

app.get("/ring1", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "ring1.html"));
});

app.get("/ringformen", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "ringformen.html"));
});

app.get("/s", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "s.html"));
});

app.get("/singIn", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "singIn.html"));
});

app.get("/singup", (req, res) => {
  res.sendFile(path.join(staticFilesPath, "singup.html"));
});

// כתיבת הפורט להאזנה
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
