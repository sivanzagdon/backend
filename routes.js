const express = require("express");
const app = express();
const router = express.Router();

////
router.get('/Earrings', (req, res) => {
  res.sendFile('frontEnd/Earrings.html');
});

router.get('/bracelate', (req, res) => {
  res.sendFile('frontEnd/bracelate.html');
});

router.get('/bracelateMem', (req, res) => {
  res.sendFile('frontEnd/bracelateMen.html');
});

router.get('/buy_bracelate', (req, res) => {
  res.sendFile('frontEnd/buy_bracelate.html');
});

router.get('/buyEarrings', (req, res) => {
  res.sendFile('frontEnd/buyEarrings.html');
});

router.get('/buyNecklaces', (req, res) => {
  res.sendFile('frontEnd/buyNecklaces.html');
});

router.get('/buyRing', (req, res) => {
  res.sendFile('frontEnd/buyRing.html');
});

router.get('/cart', (req, res) => {
  res.sendFile('frontEnd/cart.html');
});

router.get('/earMen', (req, res) => {
  res.sendFile('frontEnd/earMen.html');
});

router.get('/earMen', (req, res) => {
  res.sendFile('frontEnd/earMen.html');
});

router.get('/forgetPassword', (req, res) => {
  res.sendFile('frontEnd/forgetPassword.html');
});

router.get('/necklace', (req, res) => {
  res.sendFile('frontEnd/necklace.html');
});


router.get('/necklaceMen', (req, res) => {
  res.sendFile('frontEnd/necklaceMen.html');
});

router.get('/page', (req, res) => {
  res.sendFile('frontEnd/page.html');
});

router.get('/ring', (req, res) => {
  res.sendFile('frontEnd/ring.html');
});

router.get('/ring1', (req, res) => {
  res.sendFile('frontEnd/ring1.html');
});

router.get('/ringformen', (req, res) => {
  res.sendFile('frontEnd/ringformen.html');
});

router.get('/s', (req, res) => {
  res.sendFile('frontEnd/s.html');
});


router.get('/singIn', (req, res) => {
  res.sendFile('frontEnd/singIn.html');
});


router.get('/singup', (req, res) => {
  res.sendFile('frontEnd/singup.html');
});

// הוספת הראוטר לאפליקציה
app.use("/", router);

// כתיבת הפורט להאזנה
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
