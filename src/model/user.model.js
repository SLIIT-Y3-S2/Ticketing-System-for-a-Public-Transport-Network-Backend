const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
  address: {
    type: String,
  },
  type: {
    type: String,
    default: "Passenger",
  },
  balance: {
    type: Number,
    default:100
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;