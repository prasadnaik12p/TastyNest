const express = require("express");
const app = express();

const connectDB = require("./config/database");
const recipeRouter = require("./routes/recipes");
const UserRouter = require("./routes/User.js");
const AdminRouter = require("./routes/admin.js");
const path = require("path");
const ExpressError = require("./utils/ExpressError.js");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User.js");
const MongoStore = require("connect-mongo");
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

connectDB();

const store = MongoStore.create({
  mongoUrl: process.env.MONGO_URL,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 3600,
});

const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

store.on("error", (err) => {
  console.log("Errro in  MONGO SESSION", err);
});

app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currUser = req.user;
  next();
});

app.use("/recipes", recipeRouter);
app.use("/user", UserRouter);
app.use("/admin", AdminRouter);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).json({ message });
});

app.listen(8080, () => {
    console.log("server is listing the port 8080");
});