const userController = require("../controllers/user");
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const User = require("../models/User.js");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middlewares/User.js")
// const userController = require("../controllers/users.js");


router.post("/signup", wrapAsync(userController.userSignUp));

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);
   
router.get("/logout", userController.logout);

module.exports = router;