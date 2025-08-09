const adminControler = require("../controllers/admin.js");
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

const Admin = require("../models/Admin.js");
const passport = require("passport");
const { saveRedirectUrl, isLoggedIn } = require("../middlewares/User.js")
// const userController = require("../controllers/users.js");


router.post("/signup", wrapAsync(adminControler.AdminSignUp));

router.post("/login", saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),adminControler.login);
   
router.get("/logout",adminControler.logout);

module.exports = router;