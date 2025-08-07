const express = require("express");
const app = express();

const connectDB = require("./config/database");

connectDB();

app.listen(8080, () => {
    console.log("server is listing the port 8080");
});