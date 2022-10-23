const mongoose = require("mongoose");

const DB =
  "mongodb+srv://teamticketing:chkticketing@public-transport-ticket.orsffuw.mongodb.net/Public-Transport-Ticketing-System?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(DB);
  console.log("Database Connected");
};

module.exports = connectDB;