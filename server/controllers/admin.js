const Admin = require("../models/Admin");

const { validate } = require("deep-email-validator");

module.exports.AdminSignUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;

        const validationResult = await validate(email);

        if (!validationResult.valid) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ message: "Password should be greater than 6 character" });
        }

        const newAdmin = new Admin({
            email,
            username,
        });
        const registerAdmin = await Admin.register(newAdmin, password);
        req.login(registerAdmin, (err) => {
            if (err) {
                next(err);
            }

            res.status(201).json({ message: "Admin Created Sucessfully" });
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