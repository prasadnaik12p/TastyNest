const User = require("../models/User");
const Order = require("../models/Order");
const { validate } = require("deep-email-validator");

module.exports.userSignUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        const validationResult = await validate(email);

        if (!validationResult.valid) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ message: "Password should be greater than 6 character" });
        }

        const newUser = new User({
            email,
            username,
        });
        const registerdUser = await User.register(newUser, password);
        req.login(registerdUser, (err) => {
            if (err) {
                next(err);
            }

            res.status(201).json({ message: "User Created Sucessfully" });
        });
    } catch (err) {
        res.status(505).json({ message: err });
    }
};

module.exports.login = async (req, res) => {

    let redirectUrl = res.locals.redirectUrl || "/";
    res.status(201).json({ message:"Welcome back" },redirectUrl);
};


module.exports.logout = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
      res.status(201).json({ message: "Logged Out Sucessfully" });
  });
};
