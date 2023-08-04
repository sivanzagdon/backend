
const express = require("express");
const router=express.Router();

router.get("/", (req, res) => {
  res.render("page");
});

router.get("/page", (req, res) => {
  res.render("page");
});

module.exports=router;

/*
const app = express();
const path = require("path");

// מיקום התיקייה "frontEnd"
const staticFilesPath = path.join(__dirname, "frontEnd");

// שימוש ב- express.static עבור התיקייה "frontEnd"
app.use(express.static(staticFilesPath));

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Cart = require("../models/cart");

// ראוט להרשמה
router.post("/signIn", (req, res) => {
  // קוד התחברות משתמש
});

// ראוט לשכחת סיסמה
router.post("/forgetPassword", (req, res) => {
  // קוד לאיפוס סיסמה
});

// ראוט לדף הבית
router.get("/page", (req, res) => {
  // קוד להצגת דף הבית
});

// ראוט לתצוגת עגילים
router.get("/earrings", (req, res) => {
  // קוד להצגת עגילים
});

// ראוט לתצוגת צמידים
router.get("/bracelet", (req, res) => {
  // קוד להצגת צמידים
});

// ראוט לתצוגת צמידים לזכר
router.get("/braceletMen", (req, res) => {
  // קוד להצגת צמידים לזכר
});

// ראוט לתצוגת שרשראות
router.get("/necklaces", (req, res) => {
  // קוד להצגת שרשראות
});

// ראוט לתצוגת טבעות
router.get("/ring", (req, res) => {
  // קוד להצגת טבעות
});

// ראוט לתצוגת טבעות לגברים
router.get("/ringMen", (req, res) => {
  // קוד להצגת טבעות לגברים
});

// ראוט לקניית עגילים
router.post("/buyEarrings", (req, res) => {
  // קוד לביצוע רכישת עגילים
});

// ראוט לקניית צמידים
router.post("/buyBracelet", (req, res) => {
  // קוד לביצוע רכישת צמידים
});

// ראוט לקניית שרשראות
router.post("/buyNecklaces", (req, res) => {
  // קוד לביצוע רכישת שרשראות
});

// ראוט לקניית טבעות
router.post("/buyRing", (req, res) => {
  // קוד לביצוע רכישת טבעות
});

// ראוט להצגת העגלה
router.get("/cart", (req, res) => {
  // קוד להצגת העגלה
});

// ראוט להרשמה
router.post("/signup", (req, res) => {
  // קוד התחברות משתמש
});

module.exports = router;


// כתיבת הפורט להאזנה
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/
