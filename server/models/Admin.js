const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    url: String,
    filename: String,
  },
  // Admin-specific fields
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Adds username + password fields and authentication methods
adminSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Admin", adminSchema);
