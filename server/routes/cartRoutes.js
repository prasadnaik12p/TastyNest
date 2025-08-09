

const express = require("express");
const cartController = require("../controllers/cartcontroler.js");
const { isLoggedIn } = require("../middlewares/User.js");

const router = express.Router();

router.post("/add", isLoggedIn, cartController.addToCart);
router.get("/", isLoggedIn, cartController.getCart);
router.post("/checkout", isLoggedIn, cartController.placeOrder);

export default router;
